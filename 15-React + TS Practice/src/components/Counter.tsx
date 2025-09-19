import { useReducer } from "react";
import Button from "./Button";

type StateType = {
  count: number;
};

const initialState: StateType = {
  count: 0,
};

type ActionType =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "incrementBy"; payload: number }
  | { type: "decrementBy"; payload: number };

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "incrementBy":
      return { ...state, count: state.count + action.payload };
    case "decrementBy":
      return { ...state, count: state.count - action.payload };
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({ type: "increment" });

  const handleDecrement = () => dispatch({ type: "decrement" });

  const handleReset = () => dispatch({ type: "reset" });

  const handleIncrementBy = () =>
    dispatch({ type: "incrementBy", payload: 10 });

  const handleDecrementBy = () =>
    dispatch({ type: "decrementBy", payload: 10 });

  return (
    <div>
      <h2>Count : {state.count}</h2>
      <div>
        <Button label="Increment" onClick={handleIncrement} />
        <Button label="Decrement" onClick={handleDecrement} />
        <Button label="Reset" onClick={handleReset} />
      </div>
    </div>
  );
};

export default Counter;
