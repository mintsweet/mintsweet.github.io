import { useState, useContext } from 'react';

import TodoContext from './context';

export default function Add() {
  console.log('Render Add Component...');

  const [name, setName] = useState('');

  const { dispatch } = useContext(TodoContext);

  return (
    <div className="add">
      <input
        placeholder="Add Todo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setName('');
          dispatch({ type: 'added', name });
        }}
      >
        Add
      </button>
    </div>
  );
}
