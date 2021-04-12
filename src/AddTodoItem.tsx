import React, { useState } from 'react';
import { AddTodo } from './types';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoItem: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <div className="add-todo">
      <form>
        <input
          type="text"
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            addTodo(text);
            setText('');
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
