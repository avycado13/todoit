import { NextRequest, NextResponse } from "next/server";
import {
    type ReadonlyJSONValue,
    withValidation,
} from "@rocicorp/zero";
import {
    handleGetQueriesRequest,
    PushProcessor,
    ZQLDatabase,
} from "@rocicorp/zero/server";
import {
    createMutators as createMutatorsShared,
} from "@/db/zero/mutators";
import {
    schema,
} from "@/db/zero/schema";
import { queries } from "@/db/zero/queries";
import type { Session } from "@/lib/auth";
import {
    NodePgConnection,
} from "drizzle-zero/node-postgres";
import { db } from "@/db/db";

const processor = new PushProcessor(
    new ZQLDatabase(new NodePgConnection(db), schema),
);

const createMutators = (authData: Session | null) =>
    createMutatorsShared({
        user: authData?.user ?? { id: "UNKNOWN" },
        session: authData ? { token: authData.session.token } : undefined,
    });

const validatedQueries = Object.fromEntries(
    Object.values(queries).map((q) => [q.queryName, withValidation(q)]),
);

function getQuery(
    authData: Session | null,
    name: string,
    args: readonly ReadonlyJSONValue[],
) {
    if (name in validatedQueries) {
        const q = validatedQueries[name];
        return q(authData, ...args);
    }
    throw new Error(`Unknown query: ${name}`);
}

export async function POST(req: NextRequest) {
    const url = new URL(req.url);
    const authHeader = req.headers.get("x-auth");
    let authData: Session | null = null;
    try {
        authData = authHeader ? JSON.parse(authHeader) : null;
    } catch {
        authData = null;
    }

    if (url.pathname.endsWith("/mutate")) {
        const body = await req.json();
        const result = await processor.process(createMutators(authData), body);
        return NextResponse.json(result);
    }

    if (url.pathname.endsWith("/get-queries")) {
        const body = await req.json();
        const result = await handleGetQueriesRequest(
            (name, args) => ({ query: getQuery(authData, name, args) }),
            schema,
            body,
        );
        return NextResponse.json(result);
    }

    return NextResponse.error();
}