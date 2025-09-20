type ButtonProps = {
  btnClass: string;
  btnName: string;
  onClick: () => void;
};

const Button = ({ btnClass, btnName, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={btnClass}>
      {btnName}
    </button>
  );
};

export default Button;
