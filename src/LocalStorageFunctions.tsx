import { Todo } from "./types";

// function to determine if LocalStorage is available for the current session
export function localStorageAvailable() {
	var test = "test";
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch (e) {
		return false;
	}
}

// check if a localstorage var exists
export function localStorageHasItem(key: string) {
	return localStorage.getItem(key) !== null;
}

// turn 1 todo to string
export function todoToString(todo: Todo) {
	return '{"text":' + todo.text + ',"complete":' + todo.complete + "}";
}

// take all the current todos and stringify them
export function stringifyCurrentTodos(todos: Todo[]) {
	let stringifiedTodos = "[";
	for (var todo of todos) {
		stringifiedTodos =
			stringifiedTodos +
			'{"text":"' +
			todo.text +
			'","complete":' +
			todo.complete +
			"},";
	}
	stringifiedTodos = stringifiedTodos.slice(0, -1);
	stringifiedTodos = stringifiedTodos + "]";
	return stringifiedTodos;
}

// add a todo to the list
export function addTodoToList(todos: Todo[], newTodo: Todo) {
	// first I need to check if the list is empty
	if (todoToString(todos[0]) === '{"text":"","complete":false}') {
		console.log("Previous list was empty");
		return "[" + todoToString(newTodo) + "]";
	}
}
