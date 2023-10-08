import Item from './item';

export default function Column({ title, todos, onPrev, onNext, onDelete }) {
  return (
    <ul className="column">
      <h2>{title}</h2>
      {todos.map((todo) => (
        <Item
          key={todo.name}
          todo={todo}
          onPrev={onPrev}
          onNext={onNext}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
