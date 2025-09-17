import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter>{(num: number) => <>Count : {num}</>}</Counter>
    </div>
  );
};

export default App;
