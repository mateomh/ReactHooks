import { useState } from 'react';
const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [id, setId] = useState("abcd");
  
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

export default UseStateHook;