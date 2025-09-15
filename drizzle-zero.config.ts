import { drizzleZeroConfig } from "drizzle-zero";
// directly glob import your original Drizzle schema w/ tables/relations
import * as drizzleSchema from "./db/schema";

// Define your configuration file for the CLI
export default drizzleZeroConfig(drizzleSchema, {
    // Specify which tables and columns to include in the Zero schema.
    // This allows for the "expand/migrate/contract" pattern recommended in the Zero docs.

    // All tables/columns must be defined, but can be omitted or set to false to exclude them from the Zero schema.
    // Column names match your Drizzle schema definitions
    tables: {
        // this can be set to false
        // e.g. users: false,
        user: {
            id: true,
            name: true,
            // omit columns to exclude them
            email: true,
            role: true,
        },
        tasks: {
            // or this can be set to false
            // e.g. id: false,
            id: true,
            title: true,
            description: true, 
            due_date: true,
            status: true,
            created_at: true,
            updated_at: true,
            userId: true,

        },
    },

    // Specify the casing style to use for the schema.
    // This is useful for when you want to use a different casing style than the default.
    // This works in the same way as the `casing` option in the Drizzle ORM.
    //
    // @example
    // casing: "snake_case",
});