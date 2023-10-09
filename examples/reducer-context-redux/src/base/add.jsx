import { useState } from 'react';

export default function Add({ onAdd }) {
  console.log('Render Add Component...');

  const [name, setName] = useState('');

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
          onAdd(name);
        }}
      >
        Add
      </button>
    </div>
  );
}
