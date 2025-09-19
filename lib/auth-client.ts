import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";
 
export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:8081", // Base URL of your Better Auth backend.
    plugins: [
        expoClient({
            scheme: "todoit",
            storagePrefix: "todoit",
            storage: SecureStore,
        })
    ]
});
