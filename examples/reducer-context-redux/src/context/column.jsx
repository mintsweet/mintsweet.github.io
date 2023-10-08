import Item from './item';

export default function Column({ title, todos }) {
  return (
    <ul className="column">
      <h2>{title}</h2>
      {todos.map((todo) => (
        <Item key={todo.name} todo={todo} />
      ))}
    </ul>
  );
}
