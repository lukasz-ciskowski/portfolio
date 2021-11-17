import styled, { css } from "styled-components"
import { theme } from "theme/theme"

export const Section = styled.section`
    position: relative;
`

export const ContactBox = styled.div`
    margin: ${theme.space.md};
    padding: ${theme.space.md};
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: ${theme.space.xl};

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        background-color: ${theme.palette.background};
        border-radius: 20px;
        opacity: 1;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
    }

    #contact-rocket {
        z-index: 2;
        height: 350px;
    }
`

export const Wrapper = styled.div`
    position: relative;
    height: fit-content;
`

export const FloatingLoading = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    z-index: 3;
    > * {
        z-index: 3;
    }
    &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: ${theme.palette.background_darker};
        opacity: 0.8;
    }
`

export const ContactFields = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.space.xs};
    width: 60%;
    button {
        margin-top: ${theme.space.sm};
    }
`
