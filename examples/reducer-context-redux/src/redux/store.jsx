import { createStore } from 'redux';

function todoReducer(
  todos = [
    { name: '学英语', step: 1 },
    { name: '写代码', step: 1 },
  ],
  action
) {
  switch (action.type) {
    case 'added': {
      return [
        ...todos,
        {
          name: action.name,
          step: 1,
        },
      ];
    }
    case 'prev': {
      return todos.map((t) => {
        if (t.name === action.todo.name) {
          return { ...t, step: t.step - 1 };
        } else {
          return t;
        }
      });
    }
    case 'next': {
      return todos.map((t) => {
        if (t.name === action.todo.name) {
          return { ...t, step: t.step + 1 };
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return todos.filter((t) => t.name !== action.name);
    }
    default:
      return todos;
  }
}

export default createStore(todoReducer);
