import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContent } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<any> {
  children: ReactNode;
}

export function Button({ children, ...props }: IButtonProps) {
  return <ButtonContent {...props}>{children}</ButtonContent>;
}
