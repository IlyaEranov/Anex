import { IconButton as MuiIconButton, type IconButtonProps as MuiIconButtonProps } from "@mui/material"
import type { FC } from "react"

interface IconButtonProps extends MuiIconButtonProps{
  path: string
}

const IconButton: FC<IconButtonProps> = ({path, ...rest}) => {
  return(
    <MuiIconButton {...rest}>
      <img src={path}/>
    </MuiIconButton>
  )
}

export default IconButton