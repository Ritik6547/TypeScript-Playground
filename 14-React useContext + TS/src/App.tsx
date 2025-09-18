import { CounterProvider, initialState } from "./context/CounterContext";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <CounterProvider count={initialState.count} text={initialState.text}>
        <Counter>{(num: number) => <>Count : {num}</>}</Counter>
      </CounterProvider>
    </div>
  );
};

export default App;
