
import type { ReactElement } from "react";

export interface ButtonProps {
  variants: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}
const variantStyles = {
  primary: "bg-teal-600 text-white",
  secondary: "text-teal-600 bg-slate-800",
};
const sizeStyles = {
  sm: " py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

const defaultStyles = "rounded-md p-4 flex ";

//

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variants]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div>:null}
      {props.text}
      {props.endIcon}
    </button>
  );
};
