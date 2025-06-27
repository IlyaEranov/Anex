import { TextField, ThemeProvider, type TextFieldProps } from "@mui/material"
import type { FC } from "react"
import s from "./SelectField.module.scss"
import React from "react"
import { FieldTheme } from "../FieldTheme"

const SelectField: FC<TextFieldProps> = ({ ...rest }) => {
  return (
    <ThemeProvider theme={FieldTheme}>
      <TextField
        className={s.field}
        variant="filled"
        {...rest}
      />
    </ThemeProvider>
  )
}

export default React.memo(SelectField)