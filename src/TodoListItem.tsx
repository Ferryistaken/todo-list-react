import React from 'react';
import { Todo, ToggleTodo } from './types';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li className="todo-item">
      <label
        className={ todo.complete ? "strikethrough" : ""}
      >
        <input
          className="checkboxitem"
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{' '}
        {todo.text}
      </label>
    </li>
  );
};