import styled from "styled-components"

export const Section = styled.section`
    background: ${({ theme }) => theme.palette.background_darker};
    background: linear-gradient(
        0deg,
        ${({ theme }) => theme.palette.background_darker} 85%,
        rgba(0, 212, 255, 0) 100%
    );
    position: relative;
`

export const Content = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.md};
    display: flex;
    justify-content: center;
    position: relative;
    flex-direction: column;

    .about-highlight {
        color: ${({ theme }) => theme.palette.highlight};
    }
    h1 {
        margin-top: ${({ theme }) => theme.space.xs};
    }
`

export const Description = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-direction: row;
    align-items: center;
    column-gap: ${({ theme }) => theme.space.xl};
    padding: 0 ${({ theme }) => theme.space.md};
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
    color: ${({ theme }) => theme.palette.highlight};
    margin-right: ${({ theme }) => theme.space.xs};
`

export const RocketWrapper = styled.div`
    margin: ${({ theme }) => theme.space.xl} auto 0;
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
