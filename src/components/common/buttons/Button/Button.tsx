import { Button as MuiButton, type ButtonProps as MuiButtonProps } from "@mui/material"
import type { FC } from "react"

interface ButtonProps extends MuiButtonProps{
  variantColor: "red" | "white" | "black"
}

const Button: FC<ButtonProps> = ({...rest}) => {
  return(
    <MuiButton  {...rest}/>
  )
}

export default Button