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
    .burger-button svg {
        transition: height 300ms, width 300ms;
    }

    &.scrolled {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
        h4 {
            font-size: ${theme.fontSize.small};
        }
        .burger-button svg {
            height: 25px;
            width: 25px;
        }
    }
    z-index: 5;

    .desktop-menu-items {
        display: flex;
    }
    .burger-button {
        display: none;
        padding: 8px;
    }
    @media screen and (max-width: 950px) {
        .desktop-menu-items {
            display: none;
        }
        .burger-button {
            display: block;
        }
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const MobileMenuItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: ${theme.space.sm};
    background-color: ${theme.palette.background_darker};
    overflow: hidden;
    padding: ${theme.space.md} 0 ${theme.space.lg};
    position: relative;

    h3 {
        margin-bottom: ${theme.space.xxs};
    }
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
export const Puller = styled.div`
    border-radius: 5px;
    width: 30px;
    height: 4px;
    background-color: ${theme.palette.secondary};
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
`

export const CloseButton = styled.div`
    position: absolute;
    top: ${theme.space.sm};
    right: ${theme.space.sm};
`
