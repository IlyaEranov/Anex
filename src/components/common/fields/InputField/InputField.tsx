import { TextField, ThemeProvider, type TextFieldProps } from "@mui/material"
import type { FC } from "react"
import React from "react"
import { FieldTheme } from "../FieldTheme"

const InputField: FC<TextFieldProps> = ({...rest}) => {
  return (
    <ThemeProvider theme={FieldTheme}>
      <TextField  variant="standard" {...rest}/>
    </ThemeProvider>
  )
}

export default React.memo(InputField)