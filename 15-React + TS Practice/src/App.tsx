import { useState, type ChangeEvent } from "react";
import Button from "./components/Button";
import InputBox from "./components/InputBox";
import Counter from "./components/Counter";
import { useTheme } from "./context/ThemeContext";

type Status = "idle" | "loading" | "success" | "error";

const App = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [inputVal, setInputVal] = useState("");
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log("Button Clicked");
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  return (
    <div className={`app ${theme === "light" ? "light" : "dark"}`}>
      <Button
        label={theme === "light" ? "dark" : "light"}
        onClick={toggleTheme}
      />
      <h1>Practice React With TS</h1>
      <Button label="practice" onClick={handleClick} />
      <Button label="reset" />

      <h2>{status}</h2>

      <div>
        <Button label="idle" onClick={() => setStatus("idle")} />
        <Button label="loading" onClick={() => setStatus("loading")} />
        <Button label="success" onClick={() => setStatus("success")} />
        <Button label="error" onClick={() => setStatus("error")} />
      </div>

      <h2>{inputVal}</h2>
      <InputBox value={inputVal} onChange={handleInput} />

      <Counter />
    </div>
  );
};

export default App;
