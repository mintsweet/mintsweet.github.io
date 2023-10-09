import { useSelector } from 'react-redux';

import Todo from './todo';

export default function Todos() {
  console.log('Render Todos Component...');

  const todos = useSelector((state) => state);

  return (
    <ul className="todos">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
