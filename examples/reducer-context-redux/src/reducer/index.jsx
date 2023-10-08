import { useReducer, useMemo } from 'react';

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

export default function ReducerApp() {
  const [todos, dispatch] = useReducer(todoReducer, [
    { name: '学英语', step: 1 },
    { name: '写代码', step: 1 },
  ]);

  const handleAddTodo = (name) => {
    dispatch({
      type: 'added',
      name,
    });
  };

  const handlePrevStep = (todo) => {
    dispatch({
      type: 'prev',
      todo,
    });
  };

  const handleNextStep = (todo) => {
    dispatch({
      type: 'next',
      todo,
    });
  };

  const handleDelTodo = (name) => {
    dispatch({
      type: 'deleted',
      name,
    });
  };

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
    <div className="container">
      <h1>Base App</h1>
      <AddTodo onAdd={handleAddTodo} />
      <div className="columns">
        {columns.map((column) => (
          <Column
            key={column.step}
            title={column.title}
            todos={column.todos}
            onPrev={handlePrevStep}
            onNext={handleNextStep}
            onDelete={handleDelTodo}
          />
        ))}
      </div>
    </div>
  );
}
