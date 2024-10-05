import { ThemeProvider } from "styled-components";

const styled = {
  color: {
    primary: "",
    secondary: "",
    tertiary: "",
  },
};

export const StyledProvider = ({ children }) => {
  return <ThemeProvider theme={styled}>{children}</ThemeProvider>;
};
