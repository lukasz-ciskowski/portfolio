import React, { useCallback, useEffect, useRef, useState } from "react"
import * as S from "./styles"
import { Link } from "react-scroll"
import { NAV_ITEMS, SECTIONS } from "./sections"
import { IconButton, SwipeableDrawer } from "@material-ui/core"
import Burger from "/public/images/burger.svg"
import Close from "/public/images/close.svg"

function Nav() {
    const navbarRef = useRef<HTMLDivElement>(null)
    const [drawer, setDrawer] = useState(false)

    const handleNavbarScroll = useCallback(() => {
        var currentScrollPos = window.pageYOffset

        if (currentScrollPos > 20) navbarRef.current?.classList.add("scrolled")
        else navbarRef.current?.classList.remove("scrolled")
    }, [])

    const handleCloseDrawer = () => setDrawer(false)
    const handleOpenDrawer = () => setDrawer(true)

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
                <IconButton className="burger-button" onClick={handleOpenDrawer}>
                    <Burger width={30} height={30} />
                </IconButton>
                <S.MenuItems className="desktop-menu-items">
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
                <SwipeableDrawer
                    container={
                        typeof window !== "undefined" ? () => window.document.body : undefined
                    }
                    anchor="top"
                    open={drawer}
                    onClose={handleCloseDrawer}
                    onOpen={handleOpenDrawer}
                    disableSwipeToOpen={false}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {drawer && (
                        <S.MobileMenuItems>
                            <h3>Navigation</h3>
                            <S.CloseButton>
                                <IconButton onClick={handleCloseDrawer}>
                                    <Close width={20} height={20} />
                                </IconButton>
                            </S.CloseButton>
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
                            <S.Puller />
                        </S.MobileMenuItems>
                    )}
                </SwipeableDrawer>
            </S.Content>
        </S.Navigation>
    )
}

export default Nav
