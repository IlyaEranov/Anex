import { createTheme } from "@mui/material";

export const FieldTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: `#000000`
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            backgroundColor: `rgba(255, 255, 255, 1)`
          }
        }
      }
    }
  }
})