import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title="Hello" />
      <Section title="Section One">
        <span>This is section one</span>
      </Section>
      <Counter setCount={setCount}>Count : {count}</Counter>
      <List
        items={["alpha", "ritik", "guest"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
};

export default App;
