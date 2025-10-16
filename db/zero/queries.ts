import { syncedQuery, syncedQueryWithContext } from "@rocicorp/zero";
import { z } from "zod";
import { type Session } from "@/lib/auth";
import { builder } from "./schema.gen";

export const queries = {
  allTasks: syncedQueryWithContext(
    "allTasks",
    z.tuple([]),
    (authData: Session | null) => {
      if (!authData?.user.id) {
        throw new Error("User ID is undefined");
      }
      return builder.tasks.where("userId", "=", authData.user.id).orderBy("created_at", "desc");
    },
  ),

  taskById: syncedQueryWithContext(
    "taskById",
    z.tuple([z.string()]),
    (authData: Session | null, id) => {
      if (!authData?.user.id) {
        throw new Error("User ID is undefined");
      }
      return builder.tasks
        .where("id", "=", parseInt(id))
        .where("userId", "=", authData.user.id)
        .one();
    },
  ),
};