import styled from "styled-components"
import { theme } from "theme/theme"

export const Section = styled.section`
    background-color: ${theme.palette.background_darker};
    position: relative;
`

export const Content = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: ${theme.space.xl} ${theme.space.md};
    display: flex;
    justify-content: center;
    position: relative;
    flex-direction: column;

    .project-highlight {
        color: ${theme.palette.highlight};
    }
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
        background-color: #17182f;
        border-radius: 20px;
        filter: blur(4px);
        opacity: 0.7;
    }

    svg {
        z-index: 2;
        height: 350px;
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