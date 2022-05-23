import { useMemo, useState } from "react"

const UseMemoHook = () => {
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

  // caches the value of count for the rest of the application to use when rerendering
  // unless the value of count is changed the use memo is going to return the cahced value
  const handleRerender = useMemo(() => {
    for (let i=0; i< 1000000000; i++) {}

    return count * 2;
  }, [count]);

  return (
    <div className="App">
      <button onClick={handleSubstract}>-</button>
      <span>{count}</span>
      {show ? <span>{id}</span> : null}
      <button onClick={handleAdd}>+</button>
      <span>{handleRerender}</span>
      <button onClick={() => setShow((prev) => !prev)}>Show</button>
    </div>
  );
}

export default UseMemoHook