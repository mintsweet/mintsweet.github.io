import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Add() {
  console.log('Render Add Component...');

  const [name, setName] = useState('');

  const dispatch = useDispatch();

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
