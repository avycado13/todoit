import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { useSession } from "@/lib/use-session";
import { useRouter } from "expo-router";

const SignUpScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const { signUp } = useSession();
	const router = useRouter();

	const handleSignUp = async () => {
		try {
			await signUp(email, password, name);
		} catch (error) {
			Alert.alert("Sign Up Error", "Failed to create account. Please try again.");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sign Up</Text>
			<TextInput
				placeholder="Name"
				value={name}
				onChangeText={setName}
				style={styles.input}
			/>
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
			<Button title="Sign Up" onPress={handleSignUp} />
			<br></br>
			<Button title="Already have an account? Sign In" onPress={() => router.push("/sign-in")} />
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

export default SignUpScreen;
