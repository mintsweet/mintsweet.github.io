import BaseApp from './base';
import ReducerApp from './reducer';
import ContextApp from './context';
import ReduxApp from './redux';

function App() {
  console.log('Render App...');

  return (
    <>
      {/* <BaseApp /> */}
      {/* <ReducerApp /> */}
      {/* <ContextApp /> */}
      <ReduxApp />
    </>
  );
}

export default App;
