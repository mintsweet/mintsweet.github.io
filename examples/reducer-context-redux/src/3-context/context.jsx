import { createContext } from 'react';

let nextId = 3;
export const initialTodos = [
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

export default createContext();
