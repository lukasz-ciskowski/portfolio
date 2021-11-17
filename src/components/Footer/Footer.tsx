import { NAV_ITEMS } from "components/Nav/sections"
import React from "react"
import * as S from "./styles"
import { Link } from "react-scroll"

function Footer() {
    return (
        <S.FooterSection>
            <S.Content>
                <S.Overcap>
                    <h3>Personal Portfolio</h3>
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
                    <small>&copy; 2021 Łukasz Ciskowski</small>
                </S.Overcap>
                <S.Contact>
                    <h4>Lets talk</h4>
                    <a href="mailto:lukasz_ciskowski@wp.pl">lukasz_ciskowski@wp.pl</a>
                    <a href="tel:516-354-014">(+48) 516 354 014</a>
                </S.Contact>
            </S.Content>
        </S.FooterSection>
    )
}

export default Footer
