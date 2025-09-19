import type { ChangeEvent } from "react";

type InputBoxProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputBox = ({ value, onChange }: InputBoxProps) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default InputBox;
