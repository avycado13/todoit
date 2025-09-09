import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SignInScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = async () => {
		await authClient.signIn.email({
			email,
			password,
		});
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
