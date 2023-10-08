import { useState, useMemo } from 'react';

import AddTodo from './add';
import Column from './column';

export default function BaseApp() {
  const [todos, setTodos] = useState([
    { name: '学英语', step: 1 },
    { name: '写代码', step: 1 },
  ]);

  const handleAddTodo = (name) => {
    setTodos([
      ...todos,
      {
        name,
        step: 1,
      },
    ]);
  };

  const handlePrevStep = (todo) => {
    setTodos(
      todos.map((t) => (t.name === todo.name ? { ...t, step: t.step - 1 } : t))
    );
  };

  const handleNextStep = (todo) => {
    setTodos(
      todos.map((t) => (t.name === todo.name ? { ...t, step: t.step + 1 } : t))
    );
  };

  const handleDelTodo = (name) => {
    setTodos(todos.filter((t) => t.name !== name));
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
