import BaseApp from './base';
import ReducerApp from './reducer';
import ContextApp from './context';

function App() {
  console.log('Render App...');

  return (
    <>
      {/* <BaseApp /> */}
      {/* <ReducerApp /> */}
      <ContextApp />
    </>
  );
}

export default App;
