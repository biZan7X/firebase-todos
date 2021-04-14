import { Button, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { db, auth } from "./firebase-config";

const TodoItem = ({ title, progress, id }) => {
	//^ updating the db
	const toggleProgress = () => {
		db.collection(`users/${auth.currentUser.uid}/todos`).doc(id).update({
			progress: !progress,
		});
	};

	//^ deleting in the db
	const deleteTodo = () => {
		db.collection(`users/${auth.currentUser.uid}/todos`).doc(id).delete();
	};

	return (
		<div className="TodoItem">
			<ListItem>
				<ListItemText
					primary={title}
					secondary={progress ? "in progress✍" : "completed 💯"}
				/>
			</ListItem>
			<Button onClick={toggleProgress}>{progress ? "Done" : "Undo"}</Button>
			<Button onClick={deleteTodo}>X</Button>
		</div>
	);
};

export default TodoItem;
