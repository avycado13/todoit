import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { account, jwks, session, user, verification } from "./auth/schema";

export const tasks = pgTable("tasks", {
	id: serial("id").primaryKey(),
	title: varchar("title", { length: 255 }).notNull(),
	description: text("description"), // nullable by default
	due_date: timestamp("due_date"), // nullable by default
	status: varchar("status", { length: 50 }).default("pending"),
	created_at: timestamp("created_at").defaultNow(),
	updated_at: timestamp("updated_at")
		.defaultNow()
		.$onUpdateFn(() => new Date()),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
});


export { user, session, account, verification, jwks } from "./auth/schema";

export const schema = {
		user,
		session,
		account,
		verification,
		tasks,
		jwks
} as const;
export type Schema = typeof schema;