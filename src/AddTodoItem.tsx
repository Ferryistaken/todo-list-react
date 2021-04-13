import React, { useState } from "react";
import { AddTodo } from "./types";

interface Props {
	addTodo: AddTodo;
}

export const AddTodoItem: React.FC<Props> = ({ addTodo }) => {
	const [text, setText] = useState("");

	return (
		<span className="add-todo">
			<form className="add-form">
				<input
					className="input-form"
					placeholder="Add Task"
					type="text"
					value={text}
					onChange={(e) => {
						setText(e.target.value);
					}}
				/>
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						addTodo(text);
						setText("");
					}}
				>
					Add to list
				</button>
			</form>
		</span>
	);
};
