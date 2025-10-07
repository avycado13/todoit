import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/db"; // your drizzle instance
import { jwt } from "better-auth/plugins"

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
    }),
    plugins: [ 
        jwt(), 
    ] 
});

export type Auth = typeof auth;
export type Session = typeof auth.$Infer.Session;
