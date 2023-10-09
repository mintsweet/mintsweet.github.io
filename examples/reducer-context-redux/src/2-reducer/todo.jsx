import { useState } from 'react';

export default function Todo({ todo, onChange, onDelete }) {
  console.log(`Render Todo Component(${todo.name})...`);
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.name}
          onChange={(e) => onChange({ ...todo, name: e.target.value })}
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
            onChange({
              ...todo,
              done: e.target.checked,
            })
          }
        />
        {todoContent}
      </label>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}
