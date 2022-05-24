import { createContext, useState } from "react";

export const HookDemo = createContext();

const Context = ({children}) => {
  // everything that we create inside the context and add as a value in the provider
  // will be accesible from anywhere in the application without passing it down in the
  // chanin of components

  const [count, setCount] = useState(0);

  return(
    <HookDemo.Provider
      value={{count, setCount}}
    >
      {children}
    </HookDemo.Provider>
  );
}

export default Context;