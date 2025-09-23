type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick = () => {} }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-md bg-[#A08FF8] px-6 py-2 font-semibold text-black`}>
      {label}
    </button>
  );
};

export default Button;
