import { useContext } from "react";
import { HookDemo } from "./Context";

const UseContextHook = () => {
  // now we can use the state created in the context inside this component
  // without having to pass it down and use it inside other components aswell
  const {count, setCount} = useContext(HookDemo);

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
    </div>
  );
}

export default UseContextHook;