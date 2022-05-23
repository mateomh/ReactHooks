import { useEffect } from "react";

const UseEffectHook = () => {
  // runs a single time when the component is mounted
  useEffect(() => {
    console.log("ran at mount on the dom");
  }, [])
}

export default UseEffectHook;