import { createMuiTheme } from "@material-ui/core/styles";
import colors from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.white,
    },
    black: {
      main: colors.black,
    },
    grey: {
      main: colors.grey,
    },
    white: {
      main: colors.white,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
    error: {
      main: colors.error,
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Righteous"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Red Hat Text"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
