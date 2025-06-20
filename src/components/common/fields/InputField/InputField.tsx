import { TextField, type TextFieldProps } from "@mui/material"
import type { FC } from "react"
import React from "react"

const InputField: FC<TextFieldProps> = ({...rest}) => {
  return <TextField  variant="standard" {...rest}/>
}

export default React.memo(InputField)