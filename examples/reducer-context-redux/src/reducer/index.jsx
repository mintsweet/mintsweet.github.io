import { useReducer, useMemo } from 'react';

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

export function todoReducer(todos, action) {
  switch (action.type) {
    case 'added': {
      return [...todos, { id: nextId++, name: action.name, done: false }];
    }
    case 'changed':
      return todos.map((t) => {
        if (t.id === action.todo.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    case 'deleted': {
      return todos.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function ReducerApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const handleAddTodo = (name) => {
    dispatch({
      type: 'added',
      name,
    });
  };

  const handleChangeTodo = (todo) => {
    dispatch({
      type: 'changed',
      todo,
    });
  };

  const handleDelTodo = (id) => {
    dispatch({
      type: 'deleted',
      id,
    });
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
