import styled from "styled-components"
import { theme } from "theme/theme"

export const FooterSection = styled.footer`
    position: relative;
    background-color: ${theme.palette.primary_darker};
    p,
    h2,
    h3,
    h4,
    small,
    a {
        color: ${theme.palette.background_darker};
    }
`

export const Content = styled.section`
    max-width: 1400px;
    margin: 0 auto;
    padding: ${theme.space.lg};
    display: flex;
    justify-content: space-between;

    @media (max-width: 950px) {
        padding: ${theme.space.sm};
        align-items: center;
    }
`

export const Overlap = styled.div`
    small {
        font-weight: 100;
        display: block;
        margin-top: ${theme.space.xl};
    }
`

export const Contact = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    row-gap: ${theme.space.xs};

    a {
        font-weight: 200;
    }
`

export const MenuItems = styled.div`
    display: flex;
    column-gap: ${theme.space.md};
    margin-top: ${theme.space.md};

    @media (max-width: 950px) {
        flex-wrap: wrap;
        flex-direction: column;
        column-gap: ${theme.space.xs};
    }
`

export const Item = styled.h4`
    a {
        position: relative;
        overflow: hidden;
        transition: color 300ms;
        font-weight: 200;
    }
    a::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 0.08em;
        background-color: ${theme.palette.background};
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
        transform: translate3d(-20%, 0, 0);
    }

    a:hover {
        &::after {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
`
