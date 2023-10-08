import { useMemo } from 'react';
import { Provider, useSelector } from 'react-redux';

import store from './store';
import AddTodo from './add';
import Column from './column';

export default () => (
  <Provider store={store}>
    <ReduxApp />
  </Provider>
);

function ReduxApp() {
  console.log('Render ReduxApp...');

  const todos = useSelector((state) => state);

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
      <AddTodo />
      <div className="columns">
        {columns.map((column) => (
          <Column key={column.step} title={column.title} todos={column.todos} />
        ))}
      </div>
    </div>
  );
}
