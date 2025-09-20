import type { ChangeEvent } from "react";

type InputBoxProps = {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputBox = ({ placeholder, onChange, value }: InputBoxProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      className="input-box"
      placeholder={placeholder}
    />
  );
};

export default InputBox;
