import { useRef, useState } from 'react';

const UseRefHook = () => {
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

  // Creates a reference to be used in any HTML component to track it and do 
  // things to it
  // It shoulñd be used when we need to access the underlying attributes of an
  // HTML component
  const renderRef = useRef();

  return (
    <div className="App">
      <button onClick={handleSubstract}>-</button>
      <span ref={renderRef}>{count}</span>
      <button onClick={handleAdd}>+</button>
      <p>{id}</p>
      <button onClick={() => renderRef.current.innerHTML = "20"}>To 20</button>
    </div>
  );
};

export default UseRefHook;