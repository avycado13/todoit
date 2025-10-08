import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/db"; // your drizzle instance
import { jwt } from "better-auth/plugins"
import { schema } from "@/db/schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema
    }),
    plugins: [
        jwt(),
    ],
    emailAndPassword: {
        enabled: true,
    },
    trustedOrigins: [process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'],
});

export type Auth = typeof auth;
export type Session = typeof auth.$Infer.Session;
