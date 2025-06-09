import { IconButton as MuiIconButton, type IconButtonProps as MuiIconButtonProps } from "@mui/material"
import type { FC } from "react"
import s from "./IconButton.module.scss"

interface IconButtonProps extends MuiIconButtonProps{
  path: string
}

const IconButton: FC<IconButtonProps> = ({path, ...rest}) => {
  return(
    <MuiIconButton className={s.icon__button} {...rest}>
      <img src={path}/>
    </MuiIconButton>
  )
}

export default IconButton