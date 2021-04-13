import React from "react";
import { TodoListItem } from "./TodoListItem";
import { Todo, ToggleTodo, ClearTodos } from "./types";

interface Props {
	todos: Todo[];
	toggleTodo: ToggleTodo;
	clearTodos: ClearTodos;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
	return (
		<div className="todolist-container">
			<button type="reset"></button>
			<ul>
				{todos.map((todo) => (
					<TodoListItem
						key={todo.text}
						todo={todo}
						toggleTodo={toggleTodo}
					/>
				))}
			</ul>
		</div>
	);
};
