import Footer from "components/Footer/Footer"
import React from "react"
import Particles from "react-tsparticles"
import Nav from "../Nav/Nav"
import { PARTICLES_OPTIONS } from "./particles"
import * as S from "./styles"

interface Props {
    children: React.ReactNode
}

function Layout({ children }: Props) {
    return (
        <>
            <Particles id="tsparticles" options={PARTICLES_OPTIONS} />
            <S.MainContent id="main">
                <Nav />
                {children}
                <Footer />
            </S.MainContent>
        </>
    )
}

export default Layout
