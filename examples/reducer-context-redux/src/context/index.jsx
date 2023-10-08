import { useReducer, useMemo } from 'react';

import TodoContext from './context';
import AddTodo from './add';
import Column from './column';

function todoReducer(todos, action) {
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
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function ContextApp() {
  const [todos, dispatch] = useReducer(todoReducer, [
    { name: '学英语', step: 1 },
    { name: '写代码', step: 1 },
  ]);

  const columns = useMemo(() => {
    let result = [
      {
        step: 1,
        title: 'Todo',
        todos: [],
      },
      {
        step: 2,
        title: 'In Progress',
        todos: [],
      },
      {
        step: 3,
        title: 'Done',
        todos: [],
      },
    ];

    result.forEach((column) => {
      column.todos = todos.filter((todo) => todo.step === column.step);
    });

    return result;
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className="container">
        <h1>Base App</h1>
        <AddTodo />
        <div className="columns">
          {columns.map((column) => (
            <Column
              key={column.step}
              title={column.title}
              todos={column.todos}
            />
          ))}
        </div>
      </div>
    </TodoContext.Provider>
  );
}
