import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export function useSession() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!isPending) {
      setIsAuthenticated(!!session);
    }
  }, [session, isPending]);

  const signIn = async (email: string, password: string) => {
    try {
      console.log("Signing in with:", email);

      await authClient.signIn.email({
        email,
        password,
      });
            console.log("Signed in with:", email);

      router.replace("/");
    } catch (error) {
      console.error("Sign in error:", error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      console.log("Signing up with:", email, name);
      await authClient.signUp.email({
        email,
        password,
        name,
      });
      router.replace("/");
    } catch (error) {
      console.error("Sign up error:", error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await authClient.signOut();
      router.replace("/sign-in");
    } catch (error) {
      console.error("Sign out error:", error);
      throw error;
    }
  };

  return {
    session,
    isAuthenticated,
    isPending,
    signIn,
    signUp,
    signOut,
  };
}
