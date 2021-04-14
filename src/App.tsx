import React, { useState } from "react";
import { AddTodo, ClearTodos, Todo } from "./types";
import { TodoList } from "./TodoList";
import { AddTodoItem } from "./AddTodoItem";
import { ClearTodoList } from "./ClearList";
import {
	localStorageAvailable,
	localStorageHasItem,
	stringifyCurrentTodos,
} from "./LocalStorageFunctions";

import "./index.scss";

const initialTodos: Todo[] = [
	{
		text: "Buy Milk",
		complete: false,
	},
	{
		text: "Express hate for javascript",
		complete: true,
	},
	{
		text: "Rust Evangelism",
		complete: true,
	},
	{
		text: "Donate to famous conspiracy theorists",
		complete: false,
	},
	{
		text: "Homework",
		complete: false,
	},
];

function App() {
	const [todos, setTodos] = useState(initialTodos);

	const toggleTodo = (selectedTodo: Todo) => {
		const newTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return {
					...todo,
					complete: !todo.complete,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const addTodo: AddTodo = (text: string) => {
		const newTodo = { text, complete: false };
		setTodos([...todos, newTodo]);
	};

	const clearTodos: ClearTodos = () => {
		setTodos([{ text: "", complete: false }]);
		console.log("list reset");
	};

	if (localStorageAvailable()) {
		console.log("Local Storage is Available");
		if (localStorageHasItem("ferry-todo-list-items")) {
			console.log("Current user has already some set todos");
			// TODO: implement a way to get the old items
		} else {
			console.log("Creating new localstorage todolist");
			localStorage.setItem(
				"ferry-todo-list-items",
				stringifyCurrentTodos(todos)
			);
		}
	}

	return (
		<>
			<div className="todo-list">
				<ClearTodoList clearTodos={clearTodos} />
				<TodoList
					todos={todos}
					toggleTodo={toggleTodo}
					clearTodos={clearTodos}
				/>
				<AddTodoItem addTodo={addTodo} />
			</div>
		</>
	);
}

export default App;
