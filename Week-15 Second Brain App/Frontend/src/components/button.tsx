import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
}

const variantClasses = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-black",
};
const defaultStyles =
  "px-4 py-2 rounded-md font-light flex justify-center items-center";

export function Button({ variant, text, startIcon }: ButtonProps) {
  return (
    <button className={variantClasses[variant] + " " + defaultStyles}>
      <div className="pr-2">{startIcon}</div>
      {text}
    </button>
  );
}
