import styled from "styled-components"
import { theme } from "theme/theme"

export const Navigation = styled.nav`
    padding: ${theme.space.sm} 0;
    position: fixed;
    inset: 0;
    height: fit-content;
    background-color: ${theme.palette.background};
    transition: height 300ms;

    h4 {
        transition: font-size 300ms;
    }

    &.scrolled {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
        h4 {
            font-size: ${theme.fontSize.small};
        }
    }
    z-index: 5;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 ${theme.space.md};
`

export const Logo = styled.h4`
    & > span {
        display: inline-block;

        &::first-letter {
            color: ${theme.palette.highlight};
        }
    }
`

export const MenuItems = styled.div`
    display: flex;
    column-gap: ${theme.space.md};
`

export const Item = styled.h4`
    a {
        position: relative;
        overflow: hidden;
        transition: color 300ms;
    }
    a::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 0.1em;
        background-color: ${theme.palette.highlight};
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
        transform: translate3d(-20%, 0, 0);
    }

    a:hover {
        color: ${theme.palette.highlight};
    }
    .active {
        color: ${theme.palette.highlight};
        &::after {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
`
