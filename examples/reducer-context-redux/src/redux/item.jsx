import { useDispatch } from 'react-redux';

export default function Item({ todo }) {
  const dispatch = useDispatch();

  return (
    <li className="item">
      <div className="name">{todo.name}</div>
      <div className="operate">
        {todo.step > 1 && (
          <span onClick={() => dispatch({ type: 'prev', todo })}>{'<'}</span>
        )}
        {todo.step < 3 && (
          <span onClick={() => dispatch({ type: 'next', todo })}>{'>'}</span>
        )}
        <span onClick={() => dispatch({ type: 'deleted', name: todo.name })}>
          {'Del'}
        </span>
      </div>
    </li>
  );
}
