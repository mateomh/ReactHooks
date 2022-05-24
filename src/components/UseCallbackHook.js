import React, { useCallback, useState } from "react"

const Child = React.memo(({ handleChange, setShow }) => {
  console.log("Inside Child");
  return(
    <>
      <p>{handleChange()}</p>
      <button onClick={() => setShow((prev) => !prev)}>Show</button>
    </>
  );
})

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [id,setId] = useState("abcd");
  const [show,setShow] = useState(false);

  const handleAdd = () => {
    setCount((prev) => prev + 1)
    console.log(count);
  }

  const handleSubstract = () => {
    setCount((prev) => prev - 1)
    console.log(count);
  }

  // useCallback hook caches all the values related to its dependencies like the
  // useMemo hook but it also caches the functions that are run into other components
  // and only runs them when the watched dependency has changed
  const handleChange = useCallback(() => {
    return count * 2
  }, [count]);
  
  return (
    <div className="App">
      <button onClick={handleSubstract}>-</button>
      <span>{count}</span>
      {show ? <span>{id}</span> : null}
      <button onClick={handleAdd}>+</button>
      <Child handleChange={handleChange} setShow={setShow}/>
    </div>
  );
}

export default UseCallbackHook;