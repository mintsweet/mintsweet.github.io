import { useState, useContext } from 'react';

import TodoContext from './context';

export default function Todo({ todo }) {
  console.log(`Render Todo Component(${todo.name})...`);
  const [isEditing, setIsEditing] = useState(false);

  const { dispatch } = useContext(TodoContext);

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.name}
          onChange={(e) =>
            dispatch({
              type: 'changed',
              todo: { ...todo, name: e.target.value },
            })
          }
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        <span>{todo.name}</span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <li className="todo">
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) =>
            dispatch({
              type: 'changed',
              todo: { ...todo, done: e.target.checked },
            })
          }
        />
        {todoContent}
      </label>
      <button onClick={() => dispatch({ type: 'deleted', id: todo.id })}>
        Delete
      </button>
    </li>
  );
}
