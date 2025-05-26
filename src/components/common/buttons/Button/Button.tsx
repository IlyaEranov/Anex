import s from "./Button.module.scss"
import type { FC, ReactNode } from "react";

interface ButtonProps{
  children: ReactNode
  onCLick?: () => void
  style: "white" | "red" | "black"
}

const Button: FC<ButtonProps> = ({children, onCLick, style}) => {
  return(
    <button
      className={`${s.button} ${style == "white" ? s.white : style == "red" ? s.red : s.black}`} 
      onClick={onCLick}
    >
      {children}
    </button>
  )
}

export default Button

