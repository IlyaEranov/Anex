import { Popover as MuiPopover, type PopoverProps } from "@mui/material"
import type { FC } from "react"

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
      disableAutoFocus
      disableScrollLock
      sx={{zIndex: 3000}}
      {...rest}
    >{children}</MuiPopover>
  )
}

export default Popover