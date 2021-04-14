import React, { useEffect, useState } from "react";
//*components
import TodoItem from "./TodoItem";
//*styles
import "./styles/Todos.css";
import TextField from "@material-ui/core/TextField";
//*firebase
import firebase from "firebase";
import { auth, db } from "./firebase-config";

const Todos = ({ user }) => {
	const [todoInput, setTodoInput] = useState("");
	const [todos, setTodos] = useState([]);

	//^ component didMount
	useEffect(() => {
		getTodos();
	}, []);

	const getTodos = () => {
		db.collection(`users/${auth.currentUser.uid}/todos`).onSnapshot(
			(querySnapshot) => {
				const temp = querySnapshot.docs.map((doc) => {
					return {
						id: doc.id,
						title: doc.data().title,
						progress: doc.data().progress,
					};
				});
				setTodos(temp);
			}
		);
	};

	const renderTodos = todos.map((todo) => {
		return (
			<TodoItem
				key={todo.id}
				id={todo.id}
				title={todo.title}
				progress={todo.progress}
			/>
		);
	});

	const onClickHandler = (e) => {
		e.preventDefault();

		//^ CREATE : storing the input
		db.collection(`users/${auth.currentUser.uid}/todos`).add({
			title: todoInput,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			progress: true,
		});

		//^ clearing the input field
		setTodoInput("");
	};

	const signOut = () => auth.signOut();

	return (
		<div className="Todos">
			<h1>
				<i>{user.displayName}'s</i> toDos 😁
			</h1>
			;
			<form>
				<TextField
					id="standard-basic"
					value={todoInput}
					onChange={(e) => setTodoInput(e.target.value)}
					label="What's on ur mind ❓"
				/>
				<button className="add-btn" onClick={onClickHandler} type="submit">
					+
				</button>
			</form>
			{renderTodos}
			<div className="signOutdiv">
				<button onClick={signOut} className="signOut">
					Sign Out
				</button>
			</div>
		</div>
	);
};

export default Todos;
