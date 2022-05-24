import { useReducer } from "react"

const UseReducerHook = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "substract":
        return state - 1;
      default:
        return state;
    }
  }

  // it works like redux where you have the reducer to manage your state in a very
  // controlled way and you use the dispatch and the action to pass information to
  // the reducer, this way you can pass the reducer down and have the states way
  // up in your app
  const [count, dispatch] = useReducer(countReducer, 0);

  const handleAdd = () => {
    dispatch({type: "add"});
    console.log(count);
  }

  const handleSubstract = () => {
    dispatch({type: "substract"});
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

export default UseReducerHook;