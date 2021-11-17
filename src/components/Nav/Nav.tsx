import React, { useCallback, useEffect, useRef } from "react"
import * as S from "./styles"
import { Link } from "react-scroll"
import { NAV_ITEMS, SECTIONS } from "./sections"

function Nav() {
    const navbarRef = useRef<HTMLDivElement>(null)

    const handleNavbarScroll = useCallback(() => {
        var currentScrollPos = window.pageYOffset

        if (currentScrollPos > 20) navbarRef.current?.classList.add("scrolled")
        else navbarRef.current?.classList.remove("scrolled")
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleNavbarScroll)
        return () => window.removeEventListener("scroll", handleNavbarScroll)
    }, [handleNavbarScroll])

    return (
        <S.Navigation ref={navbarRef}>
            <S.Content>
                <Link to={SECTIONS.Home} spy smooth duration={500}>
                    <S.Logo>
                        <span>Łukasz</span> <span>Ciskowski</span>
                    </S.Logo>
                </Link>
                <S.MenuItems>
                    {NAV_ITEMS.map((item) => (
                        <S.Item key={item.section}>
                            <Link
                                activeClass="active"
                                to={item.section}
                                spy
                                smooth
                                duration={500}
                                offset={-100}
                            >
                                {item.label}
                            </Link>
                        </S.Item>
                    ))}
                </S.MenuItems>
            </S.Content>
        </S.Navigation>
    )
}

export default Nav
