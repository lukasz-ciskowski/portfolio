import styled from "styled-components"

export const Section = styled.section`
    position: relative;
    background-color: ${({ theme }) => theme.palette.background_darker};
`

export const Content = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.space.md};
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;

    .experience-highlight {
        color: ${({ theme }) => theme.palette.highlight};
    }
    h1 {
        margin-bottom: ${({ theme }) => theme.space.xxs};
    }
`

export const ExperiencesList = styled.div`
    padding: ${({ theme }) => theme.space.md};
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.space.xl};
    position: relative;
`

export const RocketWrapper = styled.div`
    position: absolute;
    right: 20px;
    top: -90px;
    svg {
        width: 130px;
    }
    &[data-aos="rocket"] {
        &.aos-animate {
            transform: translate(-400px, -150px) rotate(45deg);
        }
    }

    @keyframes flameWobble {
        50% {
            transform: scale(1, 1.2) translate(30px, -70px) rotate(2deg);
        }
    }

    #rocket_svg__flame1 {
        animation: flameWobble 3s;
        animation-delay: 0.2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    #rocket_svg__flame2 {
        animation: flameWobble 2.7s;
        animation-delay: 0.4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    #rocket_svg__flame3 {
        animation: flameWobble 2.5s;
        animation-delay: 0.6s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    #rocket_svg__flame4 {
        animation: flameWobble 3.2s;
        animation-delay: 0.8s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    #rocket_svg__flame5 {
        animation: flameWobble 3.6s;
        animation-delay: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    #rocket_svg__flame6 {
        animation: flameWobble 3s;
        animation-delay: 1.2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
`
