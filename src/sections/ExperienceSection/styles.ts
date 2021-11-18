import styled from "styled-components"
import { theme } from "theme/theme"

export const Section = styled.section`
    position: relative;
    background-color: ${theme.palette.background};
`

export const ExperiencesList = styled.div`
    padding: ${theme.space.md};
    display: flex;
    flex-direction: column;
    row-gap: ${theme.space.xl};
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
