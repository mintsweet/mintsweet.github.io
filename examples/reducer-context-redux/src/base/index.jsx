import { useState } from 'react';

import Add from './add';
import Todos from './todos';

let nextId = 3;
const initialTodos = [
  {
    id: 1,
    name: 'Learning English',
    done: false,
  },
  {
    id: 2,
    name: 'Writing a blog post',
    done: false,
  },
];

export default function BaseApp() {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (name) => {
    setTodos([...todos, { id: nextId++, name: name, done: false }]);
  };

  const handleChangeTodo = (todo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        } else {
          return t;
        }
      })
    );
  };

  const handleDelTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1>Base App</h1>
      <Add onAdd={handleAddTodo} />
      <Todos
        todos={todos}
        onChange={handleChangeTodo}
        onDelete={handleDelTodo}
      />
    </div>
  );
}
