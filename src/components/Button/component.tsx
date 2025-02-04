"use client";
import "./style.scss";

type ButtonProps = {
  text: string;
  width?: string;
  onClick: (param?: boolean) => void;
};

const Button = (props: ButtonProps) => {
  const { text, width = "w-full", onClick } = props;

  return (
    <button
      className={`custom-btn p-3 rounded-md ${width}`}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

export default Button;
