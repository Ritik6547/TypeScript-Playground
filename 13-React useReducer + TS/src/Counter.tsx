import { useReducer, useState, type ChangeEvent, type ReactNode } from "react";

interface State {
  count: number;
  text: string;
}

const initialState: State = {
  count: 0,
  text: "",
};

type ActionType =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "input-text"; payload: string }
  | { type: "incrementBy"; payload: number }
  | { type: "decrementBy"; payload: number };

function reducer(state: State, action: ActionType): State {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "incrementBy":
      return { ...state, count: state.count + action.payload };
    case "decrementBy":
      return { ...state, count: state.count - action.payload };
    case "input-text":
      return { ...state, text: action.payload };
    default:
      const exhaustiveCheck: never = action;
      return state;
  }
}

type CounterProps = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: CounterProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState<number>(1);

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });
  const incrementBy = () => dispatch({ type: "incrementBy", payload: step });
  const decrementBy = () => dispatch({ type: "decrementBy", payload: step });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "input-text", payload: e.target.value });
  };
  const handleStepChange = (e: ChangeEvent<HTMLInputElement>) =>
    setStep(Number(e.target.value));

  return (
    <>
      <h1>{children(state.count)}</h1>
      <h2>{state.text}</h2>
      <input type="text " value={state.text} onChange={handleChange} />
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <h2>Increment/Decrement By</h2>
        <input value={step} type="number" onChange={handleStepChange} />
        <button onClick={incrementBy}>Increment By</button>
        <button onClick={decrementBy}>Decrement By</button>
      </div>
    </>
  );
};

export default Counter;
