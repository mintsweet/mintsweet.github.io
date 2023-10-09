import Todo from './todo';

export default function Todos({ todos, onChange, onDelete }) {
  console.log('Render Todos Component...');

  return (
    <ul className="todos">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onChange={onChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
