import styled from "styled-components"
import { theme } from "theme/theme"

export const Section = styled.section`
    background: ${theme.palette.background_darker};
    position: relative;
`

export const Description = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-direction: row;
    align-items: center;
    column-gap: ${theme.space.xl};
    padding: 0 ${theme.space.md};
    margin-left: calc((1em + 8px) * -1);
    width: 100%;

    img {
        border-radius: 50%;
    }

    @media (max-width: 950px) {
        flex-direction: column;
        row-gap: ${theme.space.sm};
        padding: 0;
        margin: 0;

        img {
            width: 250px;
            height: 250px;
        }
    }
`

export const TextWrapper = styled.div`
    display: flex;
    max-width: 75ch;
    width: 100%;
    p {
        line-height: 35px;
        text-align: justify;
    }

    @media (max-width: 950px) {
        margin-top: ${theme.space.md};
    }
`

export const CommandPrompt = styled.div`
    line-height: 30px;
    font-weight: bold;
    color: ${theme.palette.highlight};
    margin-right: ${theme.space.xs};
    
    @media (max-width: 950px) {
        display: none;
    }
`

export const RocketWrapper = styled.div`
    margin: ${theme.space.xl} auto 0;
    transform-style: preserve-3d;
    margin-left: 0;
    > div {
        transition: all 0.5s ease-out;
    }
    svg {
        overflow: visible;
        z-index: 2;
        min-width: 200px;
        transform: rotate(-10deg);
    }
`
