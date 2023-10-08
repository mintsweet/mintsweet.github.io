export default function Item({ todo, onPrev, onNext, onDelete }) {
  return (
    <li className="item">
      <div className="name">{todo.name}</div>
      <div className="operate">
        {todo.step > 1 && <span onClick={() => onPrev(todo)}>{'<'}</span>}
        {todo.step < 3 && <span onClick={() => onNext(todo)}>{'>'}</span>}
        <span onClick={() => onDelete(todo)}>{'Del'}</span>
      </div>
    </li>
  );
}
