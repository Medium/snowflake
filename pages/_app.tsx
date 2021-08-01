import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";

const GlobalStyle = createGlobalStyle`

`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
