import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	schema: "./db/schema.ts",
	out: "./drizzle",
	dbCredentials: {
		url: process.env.DATABASE_URL
			? process.env.DATABASE_URL
			: "postgresql://postgres:password@localhost:5432/todoit",
	},
});
