import { useReducer } from 'react';

import TodoContext, { todoReducer, initialTodos } from './context';
import Add from './add';
import Todos from './todos';

export default () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <ContextApp />
    </TodoContext.Provider>
  );
};

function ContextApp() {
  console.log('Render App...');

  return (
    <div className="container">
      <h1>Context App</h1>
      <Add />
      <Todos />
    </div>
  );
}
