import { db } from "@/db/db";
import {
	createMutators as createMutatorsShared,
	type Mutators,
} from "@/db/zero/mutators";
import { schema, type Schema } from "@/db/zero/schema.gen";

import { type AuthData } from "@/types/auth";
import type { ServerTransaction } from "@rocicorp/zero";
import { PushProcessor, ZQLDatabase } from "@rocicorp/zero/server";

import {
	NodePgConnection,
	type NodePgZeroTransaction,
} from "drizzle-zero/node-postgres";

type ServerTx = ServerTransaction<Schema, NodePgZeroTransaction<Record<string, unknown>>>;


const processor = new PushProcessor(
	new ZQLDatabase(new NodePgConnection(db), schema),
);

const createMutators = (authData: AuthData | undefined) => {
	const mutators = createMutatorsShared(authData);

	return {
		...mutators,
		// message: {
		//   ...mutators.message,
		//   async sendMessage(tx: ServerTx, params) {
		//     isLoggedIn(authData ?? null);

		//     await mutators.message.sendMessage(tx, params);

		//     // we can use the db tx to insert server-only data, like audit logs
		//     await tx.dbTransaction.wrappedTransaction.insert(auditLogs).values({
		//       id: crypto.randomUUID(),
		//       userId: authData.user.id,
		//       action: "sendMessage",
		//     });
		//   },
		// },
	} as const satisfies Mutators;
};

export async function POST(request: Request) {
	const cookieHeader = request.headers.get("cookie"); // string | null
	if (!cookieHeader) {
		return Response.json({ message: "No cookies found" });
	}

	const cookies = Object.fromEntries(
		cookieHeader.split(";").map(c => {
			const [key, ...rest] = c.trim().split("=");
			return [key, decodeURIComponent(rest.join("="))];
		})
	);

	const authData = cookies.authData ? JSON.parse(cookies.authData) : undefined;
	const result = await processor.process(createMutators(authData), await request.json());

	return Response.json({ result });
}
