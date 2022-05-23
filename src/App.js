import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const handleAdd = () => {
    setCount((prev) => prev+1);
    setCount((prev) => prev+1);
    console.log(count);
  }

  const handleSubstract = () => {
    setCount((prev) => prev-1);
    console.log(count);
  }

  return (
    <div className="App">
      <button onClick={handleSubstract}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

export default App;
