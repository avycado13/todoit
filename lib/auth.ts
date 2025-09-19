import { betterAuth } from "better-auth";
import { expo } from "@better-auth/expo";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { jwt, bearer, admin } from "better-auth/plugins";
import { db } from "@/db/db";
import * as schema from "@/db/schema";

export const auth = betterAuth({
	session: {
		cookieCache: {
			enabled: true,
			maxAge: 5 * 60, // Cache duration in seconds
		},
	},
	database: drizzleAdapter(db, {
		provider: "pg", // or "sqlite" or "mysql"
		schema
	}),
	plugins: [
		expo(),
		jwt({
			jwt: {
				// This is now long your websockets will be able to stay up. When the
				// websocket is closed, all the queries are dematerialized on the
				// server. So making the socket lifetime too short is bad for
				// performance.
				//
				// The Zero team is working on some improvements to auth that will
				// enable shorter-lived tokens.
				expirationTime: "1h",
			},
		}),
		bearer(),
		admin(),
	],
	trustedOrigins: ["todoit://", process.env.BETTER_AUTH_URL || "http://localhost:8081"],
	emailAndPassword: {
		enabled: true, // Enable authentication using email and password.
	},
});
