import { useState } from 'react';
const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [id, setId] = useState("abcd");
  
  const handleAdd = () => {
    setCount((prev) => prev + 1)
    console.log(count);
  }

  const handleSubstract = () => {
    setCount((prev) => prev - 1)
    console.log(count);
  }

  return (
    <div className="App">
      <button onClick={handleSubstract}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <span>{id}</span>
    </div>
  );
}

export default UseStateHook;