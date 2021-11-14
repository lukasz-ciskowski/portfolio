import type { AppProps } from "next/app"
import { GlobalStyle } from "style/GlobalStyle"
import { theme } from "theme/theme"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles"
import { muiTheme } from "theme/muiTheme"
import { ThemeProvider } from "styled-components"
import "./initial.css"

function App({ Component, pageProps }: AppProps) {
    return (
        <MuiThemeProvider theme={muiTheme}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </MuiThemeProvider>
    )
}
export default App
