import { useRef } from "react";
import Counter from "./Counter";

const UseImperativeHandleHook = () => {
  // is is used to give the parent component access to the methods or anything inside
  // a child component by selecting what goes into the imperative handle to be referenced in the parent component
  // It references whole custom made components instead of HTML components

  const ref = useRef();
  
  return (<>
    <button onClick={() => ref.current.handleSubstract()}>-</button>
    <Counter ref={ref} />
    <button onClick={() => ref.current.handleAdd()}>+</button>
  </>)
}

export default UseImperativeHandleHook;