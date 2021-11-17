import React, { useEffect } from "react"
import Head from "next/head"
import type { AppProps } from "next/app"
import { GlobalStyle } from "style/GlobalStyle"
import { theme } from "theme/theme"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles"
import { muiTheme } from "theme/muiTheme"
import { ThemeProvider } from "styled-components"
import "./initial.css"

function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.history.scrollRestoration = "manual"
        }
    }, [])

    return (
        <MuiThemeProvider theme={muiTheme}>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Łukasz Ciskowski - Portfolio</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta
                        name="description"
                        content="Łukasz Ciskowski Frontend React developer personal portfolio"
                    />
                    <link rel="icon" href="/images/favicon.png" />
                </Head>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </MuiThemeProvider>
    )
}
export default App
