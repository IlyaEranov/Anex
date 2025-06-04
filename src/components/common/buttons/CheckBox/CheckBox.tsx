import { Checkbox as MuiCheckBox, type CheckboxProps } from "@mui/material"
import type { FC } from "react"
import React from "react"

const CheckBox: FC<CheckboxProps> = ({...rest}) => {
  return(
    <MuiCheckBox {...rest}/>
  )
}

export default React.memo(CheckBox)