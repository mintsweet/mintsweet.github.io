import { Provider } from 'react-redux';

import store from './store';
import Add from './add';
import Todos from './todos';

export default () => (
  <Provider store={store}>
    <ReduxApp />
  </Provider>
);

function ReduxApp() {
  console.log('Render App...');

  return (
    <div className="container">
      <h1>Redux App</h1>
      <Add />
      <Todos />
    </div>
  );
}
