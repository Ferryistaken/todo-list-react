import React from "react";
import { ClearTodos } from "./types";

interface Props {
	clearTodos: ClearTodos;
}

export const ClearTodoList: React.FC<Props> = ({ clearTodos }) => {
	return (
		<button type="reset" className="reset-button" onClick={clearTodos}>
			Reset list
		</button>
	);
};
