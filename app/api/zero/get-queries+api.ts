import { db } from "@/db/db";
import { createMutators, type Mutators } from "@/db/zero/mutators";
import { schema, type Schema } from "@/db/zero/schema.gen";
import { type AuthData } from "@/types/auth";
import { handleGetQueriesRequest, PushProcessor, ZQLDatabase } from "@rocicorp/zero/server";
import { NodePgConnection, type NodePgZeroTransaction } from "drizzle-zero/node-postgres";

type ServerTx = ServerTransaction<Schema, NodePgZeroTransaction<Record<string, unknown>>>;

const processor = new PushProcessor(
	new ZQLDatabase(new NodePgConnection(db), schema),
);

export async function POST(request: Request) {
	const cookieHeader = request.headers.get("cookie"); // string | null
	if (!cookieHeader) {
		return Response.json({ message: "No cookies found" });
	}

	const cookies = Object.fromEntries(
		cookieHeader.split(";").map((c) => {
			const [key, ...rest] = c.trim().split("=");
			return [key, decodeURIComponent(rest.join("="))];
		}),
	);

	const authData = cookies.authData
		? (() => {
			try {
				return JSON.parse(cookies.authData);
			} catch {
				return undefined;
			}
		})()
		: undefined;

	const result = await handleGetQueriesRequest(
		(name, args) => {
			// Placeholder: Add custom query logic here if needed
			throw new Error(`Unknown query: ${name}`);
		},
		schema,
		await request.json(),
	);

	return Response.json({ result });
}