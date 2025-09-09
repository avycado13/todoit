import {
	createSchema,
	table,
	string,
	number,
	relationships,
	definePermissions,
	ANYONE_CAN_DO_ANYTHING,
} from "@rocicorp/zero";

// Define a minimal user table for the relationship reference
// Assuming 'user' table exists and has an 'id' primary key of type string.
const user = table("user")
	.columns({
		id: string(),
	})
	.primaryKey("id");

const tasks = table("tasks")
	.columns({
		id: string(), // Drizzle 'serial' maps to 'string' in Zero for primary keys (recommended for sync engines)
		title: string(),
		description: string().optional(),
		due_date: number().optional(), // Drizzle 'timestamp' maps to 'number' in Zero
		status: string(),
		created_at: number(), // Drizzle 'timestamp' maps to 'number' in Zero
		updated_at: number(), // Drizzle 'timestamp' maps to 'number' in Zero
		userId: string(),
	})
	.primaryKey("id");

const taskRelationships = relationships(tasks, ({ one }) => ({
	user: one({
		sourceField: ["userId"],
		destField: ["id"],
		destSchema: user,
	}),
}));

export const schema = createSchema({
	tables: [user, tasks],
	relationships: [taskRelationships],
});

// Define permissions for the tasks table.
// For simplicity, I'm setting ANYONE_CAN_DO_ANYTHING.
// You can refine these permissions based on your application's authorization logic.
export type AuthData = {
	sub: string; // Assuming 'sub' is the user ID in your JWT
};

export const permissions = definePermissions<AuthData, typeof schema>(
	schema,
	() => ({
		tasks: ANYONE_CAN_DO_ANYTHING,
		user: ANYONE_CAN_DO_ANYTHING, // Also allow for the user table
	}),
);

export type Schema = typeof schema;
