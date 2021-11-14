import type { NextPage } from "next"
import { useEffect } from "react"
import Layout from "components/Layout/Layout"
import AboutSection from "sections/AboutSection/AboutSection"
import HomeSection from "sections/HomeSection/HomeSection"
import AOS from "aos"
import ExperienceSection from "sections/ExperienceSection/ExperienceSection"
import ProjectsSection from "sections/ProjectsSection/ProjectsSection"

import "aos/dist/aos.css"
import ContactSection from "sections/ContactSection/ContactSection"

const Home: NextPage = () => {
    useEffect(() => {
        AOS.init({ easing: "ease-out-cubic", once: true, duration: 600 })
    }, [])

    return (
        <Layout>
            <HomeSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
        </Layout>
    )
}

export default Home
