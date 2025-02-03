"use client";

type ButtonProps = {
  text: string;
  onClick: (param?: boolean) => void;
};

const Button = (props: ButtonProps) => {
  const { text, onClick } = props;

  return <button onClick={() => onClick}>{text}</button>;
};

export default Button;
