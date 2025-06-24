import { Popover as MuiPopover, type PopoverProps } from "@mui/material"
import { type FC } from "react"
import s from "./Popover.module.scss"

const Popover: FC<PopoverProps> = ({ children, ...rest }) => {
  return (
    <MuiPopover
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      autoFocus={false}
      disableAutoFocus
      disableScrollLock
      sx={{zIndex: 3000}}
      classes={{paper: s.popover}}
      {...rest}
    >{children}</MuiPopover>
  )
}

export default Popover