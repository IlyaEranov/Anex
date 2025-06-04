import { Button as MuiButton, type ButtonProps as MuiButtonProps } from "@mui/material"
import type { FC } from "react"
import s from "./Button.module.scss"

interface ButtonProps extends MuiButtonProps{
  variantColor: "red" | "white" | "black"
}

const Button: FC<ButtonProps> = ({variant, variantColor, ...rest}) => {
  return(
    <MuiButton variant={variant} className={`${s.button} ${s[`${variantColor}`]}`} {...rest}/>
  )
}

export default Button