import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { useSession } from "@/lib/use-session";
import { useRouter } from "expo-router";

const SignInScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signIn } = useSession();
	const router = useRouter();


	const handleSignIn = async () => {
		try {
			await signIn(email, password);
		} catch (error: Error | unknown) {
			Alert.alert("Sign In Error", "Invalid email or password. Please try again.");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sign In</Text>
			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
				autoCapitalize="none"
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<Button title="Sign In" onPress={handleSignIn} />
			<br></br>
			<Button title="Don't Have an account? Sign Up" onPress={() => router.push("/sign-up")} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 16,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 16,
		textAlign: "center",
	},
	input: {
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		marginBottom: 12,
		paddingHorizontal: 8,
		borderRadius: 4,
	},
});

export default SignInScreen;
