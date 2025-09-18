import { type ReactNode } from "react";
import { useCounter, useCounterText } from "./context/CounterContext";

type CounterProps = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: CounterProps) => {
  const { count, increment, decrement } = useCounter();
  const { text, handleChange } = useCounterText();

  return (
    <>
      <h1>{children(count)}</h1>
      <h2>{text}</h2>
      <input type="text " value={text} onChange={handleChange} />
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
