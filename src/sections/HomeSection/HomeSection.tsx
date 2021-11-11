import React, { useCallback, useEffect, useRef } from "react"
import { Element, Link } from "react-scroll"
import { SECTIONS } from "components/Nav/sections"
import * as S from "./styles"
import Astronaut from "/public/images/astronaut.svg"
import Arrow from "/public/images/arrow.svg"

function HomeSection() {
    const indicatorRef = useRef<HTMLDivElement>(null)
    const handleNavbarScroll = useCallback(() => {
        var currentScrollPos = window.pageYOffset

        if (!indicatorRef.current) return
        if (currentScrollPos > 20) indicatorRef.current.classList.add("hidden")
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleNavbarScroll)
        return () => window.removeEventListener("scroll", handleNavbarScroll)
    }, [handleNavbarScroll])

    return (
        <S.Section>
            <Element name={SECTIONS.Home}>
                <S.Content>
                    <S.HeroText>
                        <h3 data-aos="fade-right">Hi, I'm Łukasz.</h3>
                        <h1 data-aos="fade-right" data-aos-delay="600">
                            I love building amazing things.
                        </h1>
                    </S.HeroText>
                    <Astronaut data-aos="fade" data-aos-delay="200" />
                </S.Content>
                <Link to={SECTIONS.About} smooth duration={500}>
                    <div data-aos="fade" data-aos-delay="1200" data-aos-offset="-200">
                        <S.CheckoutInidcator ref={indicatorRef}>
                            Check it out <Arrow id="checkout-indicator-arrow" />
                        </S.CheckoutInidcator>
                    </div>
                </Link>
            </Element>
        </S.Section>
    )
}

export default HomeSection
