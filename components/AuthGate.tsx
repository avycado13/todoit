import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useSession } from "@/lib/use-session";
import { Redirect } from "expo-router";
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { session, isPending } = useSession();

  if (isPending) {
    return (
      <ThemedView style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    );
  }

  // Only redirect if session is missing AND not pending (hydration complete)
  if (!session && !isPending) {
    return <Redirect href="/sign-in" />;
  }

  // Otherwise, render the app
  return <>{children}</>;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
