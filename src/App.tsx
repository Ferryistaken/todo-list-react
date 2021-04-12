import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodo, Todo } from "./types";
import { AddTodoItem } from "./AddTodoItem";
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

	return (
		<div className="todo-list">
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<AddTodoItem addTodo={addTodo} />
		</div>
	);
}

export default App;
