import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState({
    num: 0,
    id: "abcd"
  });
  
  const handleAdd = () => {
    setCount((prev) => {
      return(
        {...prev, num: prev.num + 1}
      )
    });
    console.log(count);
  }

  const handleSubstract = () => {
    setCount((prev) => {
      return(
        {...prev, num: prev.num - 1}
      )
    });
    console.log(count);
  }

  return (
    <div className="App">
      <button onClick={handleSubstract}>-</button>
      <span>{count.num}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

export default App;
