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

    img {
        border-radius: 50%;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    width: 75ch;
    p {
        line-height: 35px;
        text-align: justify;
    }
`

export const CommandPrompt = styled.div`
    line-height: 30px;
    font-weight: bold;
    color: ${theme.palette.highlight};
    margin-right: ${theme.space.xs};
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
