"use client";

type ButtonProps = {
  params: {
    text: string;
    fn: () => void;
  };
};

const Button = (props: ButtonProps) => {
  const { text, fn } = props.params;

  return <button onClick={fn}>{text}</button>;
};

export default Button;
