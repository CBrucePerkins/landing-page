interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-black py-2 px-3 rounded-lg cursor-pointer ${className ?? ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
