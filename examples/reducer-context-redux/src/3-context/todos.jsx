import { useContext } from 'react';

import TodoContext from './context';

import Todo from './todo';

export default function Todos() {
  console.log('Render Todos Component...');

  const { todos } = useContext(TodoContext);

  return (
    <ul className="todos">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
