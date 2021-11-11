import type { NextPage } from "next"
import { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import Layout from "components/Layout/Layout"
import AboutSection from "sections/AboutSection/AboutSection"
import HomeSection from "sections/HomeSection/HomeSection"
import { GlobalStyle } from "style/GlobalStyle"
import { theme } from "theme/theme"
import AOS from "aos"
import ExperienceSection from "sections/ExperienceSection/ExperienceSection"
import ProjectsSection from "sections/ProjectsSection/ProjectsSection"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles"
import { muiTheme } from "theme/muiTheme"

import "aos/dist/aos.css"
import ContactSection from "sections/ContactSection/ContactSection"

const Home: NextPage = () => {
    useEffect(() => {
        AOS.init({ easing: "ease-out-cubic", once: true, duration: 600 })
    }, [])

    return (
        <MuiThemeProvider theme={muiTheme}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Layout>
                    <HomeSection />
                    <AboutSection />
                    <ExperienceSection />
                    <ProjectsSection />
                    <ContactSection />
                </Layout>
            </ThemeProvider>
        </MuiThemeProvider>
    )
}

export default Home
