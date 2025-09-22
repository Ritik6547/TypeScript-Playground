type ButtonProps = {
  btnClass: string;
  label: string;
  activeClass?: string;
  onClick: () => void;
};

const Button = ({
  btnClass,
  activeClass = "",
  label,
  onClick,
}: ButtonProps) => {
  return (
    <span onClick={onClick} className={`btn ${btnClass} ${activeClass}`}>
      {label}
    </span>
  );
};

export default Button;
