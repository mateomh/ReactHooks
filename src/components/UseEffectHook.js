import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count,setCount] = useState(0);
  const [state,setState] = useState(false);
  
  const handleAdd = () => {
    setCount((prev) => prev + 1)
    console.log(count);
  }

  const handleSubstract = () => {
    setCount((prev) => prev - 1)
    console.log(count);
  }

  const handleState = () => {
    setState(!state);
  }


  // runs a single time when the component is mounted
  useEffect(() => {
    console.log("ran at mount on the dom");
  }, [])

  // runs whenever there is a an update of the component or a re render of thje compoent
  useEffect(() => {
    console.log("component re-render");
  });

  // runs when the dependecy indicated in the array changes
  useEffect(()=> {
    console.log("Count changed");
  }, [count]);

  useEffect(()=> {
    console.log("State changed");
  }, [state]);

  return (
    <div className="App">
      <button onClick={handleSubstract}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleState}>Change state</button>
    </div>
  );
}

export default UseEffectHook;