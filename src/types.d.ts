import { VoidFunctionComponent } from "react";

// define how the ToDo item looks with an interface
interface Todo {
    text: string;
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;
