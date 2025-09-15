import { authClient } from "@/lib/auth-client";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { ZeroProvider } from "@rocicorp/zero/react";
import { expoSQLiteStoreProvider } from "@rocicorp/zero/react-native";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { createMutators, type Mutators } from "@/db/zero/mutators";
import { type Schema, schema } from "@/db/zero/schema.gen";
import { useColorScheme } from "@/hooks/useColorScheme";
import type { ZeroOptions } from "@rocicorp/zero";
import { useMemo } from "react";
import { Platform } from "react-native";

const kvStore = Platform.OS === "web" ? undefined : expoSQLiteStoreProvider();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const { data: session, isPending } = authClient.useSession();

	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	// Don’t block rendering if fonts aren’t ready
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const fontLoaded = loaded ? { fontFamily: "SpaceMono" } : {};

	const authData = useMemo(() => {
		return session;
	}, [session]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const cookie = useMemo(() => {
		const ck = Platform.OS === "web" ? undefined : authClient.getCookie();
		return ck ? ck : undefined;
		// we force a re-render when the session changes, since getCookie is
		// not reactive
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session, isPending]);

	const zeroProps = useMemo(() => {
		

		return {
			storageKey: "todoit",
			kvStore,
			server: "http://localhost:4848",
			userID: authData?.user?.id ?? "anon",
			schema,
			mutators: createMutators(authData ?? undefined),
			auth: cookie,
		} as const satisfies ZeroOptions<Schema, Mutators>;
	}, [authData, cookie]);

	const content = (
		<ZeroProvider {...zeroProps}>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen name="+not-found" />
				</Stack>
				<StatusBar style="auto" />
			</ThemeProvider>
		</ZeroProvider>
	);

	// Only mount ZeroProvider if user is logged in

	return content;
}
