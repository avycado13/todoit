import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import type { Mutators } from "@/db/zero/mutators";
import type { Schema } from "@/db/zero/schema.gen";
import { authClient } from "@/lib/auth-client";
import { useQuery, useZero } from "@rocicorp/zero/react";
import { isLoading } from "expo-font";
import { Image } from "expo-image";
import { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
	const { data: session } = authClient.useSession();
	const zero = useZero<Schema, Mutators>();

	// Form state for creating new tasks
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [status, setStatus] = useState("pending");

	// Get tasks query
	const query = zero.query.tasks.where(
		"userId",
		session?.user?.id ? session.user.id : "",
	);
	const [tasks, error] = useQuery(query);

	// Handle creating a new task
	const handleCreateTask = async () => {
		if (!title.trim()) {
			Alert.alert("Error", "Title is required");
			return;
		}

		try {
			const dueDateTimestamp = dueDate ? new Date(dueDate).getTime() : null;

			await zero.mutate.tasks.insert({
				title,
				description: description || undefined,
				due_date: dueDateTimestamp,
				status,
				userId: session?.user?.id ?? "",
			});

			// Clear form
			setTitle("");
			setDescription("");
			setDueDate("");
			setStatus("pending");
		} catch (err) {
			console.error("Error creating task:", err);
			Alert.alert("Error", "Failed to create task");
		}
	};

	// Handle updating a task
	const handleUpdateTask = async (taskId: string, newStatus: string) => {
		try {
			await zero.mutate.tasks.updateTask({
				id: taskId,
				status: newStatus,
				title: null,
				description: null,
				due_date: null,
			});
		} catch (err) {
			console.error("Error updating task:", err);
			Alert.alert("Error", "Failed to update task");
		}
	};

	// Handle deleting a task
	const handleDeleteTask = async (taskId: string) => {
		try {
			await zero.mutate.tasks.remove(taskId);
		} catch (err) {
			console.error("Error deleting task:", err);
			Alert.alert("Error", "Failed to delete task");
		}
	};

	// Handle archiving a completed task
	const handleArchiveTask = async (taskId: string) => {
		try {
			await zero.mutate.tasks.updateTask({
				id: taskId,
				status: "archived",
				title: null,
				description: null,
				due_date: null,
			});
		} catch (err) {
			console.error("Error archiving task:", err);
			Alert.alert("Error", "Failed to archive task");
		}
	};

	if (isLoading("SpaceMono")) {
		return (
			<ParallaxScrollView
				headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
				headerImage={
					<Image
						source={require("@/assets/images/partial-react-logo.png")}
						style={styles.reactLogo}
					/>
				}
			>
				<ThemedView style={styles.titleContainer}>
					<ThemedText type="title">Loading tasks...</ThemedText>
				</ThemedView>
			</ParallaxScrollView>
		);
	}

	if (error) {
		return (
			<ParallaxScrollView
				headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
				headerImage={
					<Image
						source={require("@/assets/images/partial-react-logo.png")}
						style={styles.reactLogo}
					/>
				}
			>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Error loading tasks</ThemedText>
				<ThemedText>{JSON.stringify(error)}</ThemedText>
			</ThemedView>
			</ParallaxScrollView>
		);
	}

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
			headerImage={
				<Image
					source={require("@/assets/images/partial-react-logo.png")}
					style={styles.reactLogo}
				/>
			}
		>
			{/* Task Creation Form */}
			<ThemedView style={styles.formContainer}>
				<ThemedText type="title">Create New Task</ThemedText>
				<TextInput
					style={styles.input}
					placeholder="Task title"
					value={title}
					onChangeText={setTitle}
				/>
				<TextInput
					style={styles.input}
					placeholder="Description (optional)"
					value={description}
					onChangeText={setDescription}
					multiline
				/>
				<TextInput
					style={styles.input}
					placeholder="Due date (YYYY-MM-DD)"
					value={dueDate}
					onChangeText={setDueDate}
				/>
				<TouchableOpacity style={styles.button} onPress={handleCreateTask}>
					<Text style={styles.buttonText}>Add Task</Text>
				</TouchableOpacity>
			</ThemedView>

			{/* Task List */}
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Your Tasks</ThemedText>
			</ThemedView>

			{tasks && tasks.length > 0 ? (
				<FlatList
					data={tasks}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<ThemedView style={styles.taskContainer}>
							<View style={styles.taskHeader}>
								<ThemedText type="subtitle">{item.title}</ThemedText>
								<ThemedText style={styles.taskStatus}>{item.status}</ThemedText>
							</View>

							{item.description && (
								<ThemedText style={styles.taskDescription}>
									{item.description}
								</ThemedText>
							)}

							{item.due_date && (
								<ThemedText style={styles.taskDueDate}>
									Due: {new Date(item.due_date).toLocaleDateString()}
								</ThemedText>
							)}

							<View style={styles.taskActions}>
								{item.status !== "completed" && (
									<TouchableOpacity
										style={[styles.button, styles.completeButton]}
										onPress={() => handleUpdateTask(item.id, "completed")}
									>
										<Text style={styles.buttonText}>Complete</Text>
									</TouchableOpacity>
								)}

								{item.status === "completed" && (
									<TouchableOpacity
										style={[styles.button, styles.archiveButton]}
										onPress={() => handleArchiveTask(item.id)}
									>
										<Text style={styles.buttonText}>Archive</Text>
									</TouchableOpacity>
								)}

								<TouchableOpacity
									style={[styles.button, styles.deleteButton]}
									onPress={() => handleDeleteTask(item.id)}
								>
									<Text style={styles.buttonText}>Delete</Text>
								</TouchableOpacity>
							</View>
						</ThemedView>
					)}
				/>
			) : (
				<ThemedView style={styles.emptyContainer}>
					<ThemedText>No tasks yet. Create one above!</ThemedText>
				</ThemedView>
			)}
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
	formContainer: {
		padding: 16,
		gap: 12,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		padding: 12,
		fontSize: 16,
	},
	button: {
		backgroundColor: "#007AFF",
		borderRadius: 8,
		padding: 12,
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	taskContainer: {
		padding: 16,
		margin: 8,
		backgroundColor: "#f5f5f5",
		borderRadius: 8,
	},
	taskHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 8,
	},
	taskStatus: {
		fontSize: 12,
		color: "#666",
		backgroundColor: "#e0e0e0",
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 4,
	},
	taskDescription: {
		fontSize: 14,
		color: "#666",
		marginBottom: 8,
	},
	taskDueDate: {
		fontSize: 12,
		color: "#999",
		marginBottom: 12,
	},
	taskActions: {
		flexDirection: "row",
		gap: 8,
	},
	completeButton: {
		backgroundColor: "#34C759",
	},
	archiveButton: {
		backgroundColor: "#FF9500",
	},
	deleteButton: {
		backgroundColor: "#FF3B30",
	},
	emptyContainer: {
		padding: 16,
		alignItems: "center",
	},
});
