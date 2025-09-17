import type { AuthData } from "@/types/auth";
import type { Transaction } from "@rocicorp/zero";
import type { Schema } from "./schema.gen";

type Tx = Transaction<Schema>;

export function createMutators(authData: AuthData | undefined) {
	return {
		tasks: {
			add: async (
				tx: Tx,
				{
					title,
					description,
					due_date,
					status,
				}: {
					title: string;
					description?: string;
					due_date?: number;
					status: string;
				},
			) => {
				if (!authData) {
					throw new Error("Not authenticated");
				}
				try {
					await tx.mutate.tasks.insert({
						id: parseInt(crypto.randomUUID().slice(0, 12), 16), // generate a unique numeric ID
						title,
						description,
						due_date: due_date ?? null,
						status,
						created_at: Date.now(),
						updated_at: Date.now(),
						userId: authData.user.id,
					});
				} catch (err) {
					console.error("error adding task", err);
					throw err;
				}
			},

			remove: async (tx: Tx, taskId: string) => {
				if (!authData) {
					throw new Error("Not authenticated");
				}
				const task = await tx.query.tasks
					.where("id", parseInt(taskId))
					.where("userId", authData.user.id)
					.one();
				if (!task) return;
				await tx.mutate.tasks.delete({
					id: task.id,
				});
			},

			updateTask: async (
				tx: Tx,
				{
					id,
					status,
					title,
					description,
					due_date,
				}: {
					id: string;
					status: string;
					title: string | null;
					description: string | null;
					due_date: number | null;
				},
			) => {
				if (!authData) throw new Error("Not authenticated");

				// Ensure the task belongs to the authenticated user
				const task = await tx.query.tasks
					.where("id", parseInt(id))
					.where("userId", authData.user.id)
					.one();

				if (!task) return;

				await tx.mutate.tasks.update(
					{
						id: task.id,
						status,
						title: title ?? undefined,
						description,
						due_date,
						updated_at: Date.now(),
					}, // update object
				);
			},
		},
	} as const;
}

export type Mutators = ReturnType<typeof createMutators>;
