import { forwardRef, useImperativeHandle, useState } from 'react';

const Counter = forwardRef((props, ref) => {
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

  useImperativeHandle(ref, () =>{
    return {
      handleAdd,
      handleSubstract,
    }
  })

  return (     
      <span>{count}</span>   
  );
})

export default Counter;