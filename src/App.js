import './App.css';
import UseCallbackHook from './components/UseCallbackHook';
import UseContextHook from './components/UseContextHook';
import UseEffectHook from './components/UseEffectHook';
import UseMemoHook from './components/UseMemoHook';
import UseRefHook from './components/UseRefHook';
import UseStateHook from './components/UseStateHook';

function App() {
  return (
    <div className="App">
      <UseContextHook />
    </div>
  );
}

export default App;
