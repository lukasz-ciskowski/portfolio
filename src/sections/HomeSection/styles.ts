import styled from "styled-components"
import { theme } from "theme/theme"

export const Section = styled.section`
    position: relative;
`

export const Content = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;
    padding: ${theme.space.md};
    height: 100vh;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }

    svg {
        overflow: visible;
        z-index: 2;
        min-width: 300px;
    }
    #astronaut_svg__Astronaut {
        @keyframes astronaut-float {
            from {
                transform: translate3d(-30px, -30px, 0);
            }
            to {
                transform: translate3d(30px, 30px, 0);
            }
        }
        animation: astronaut-float 10s infinite linear;
        animation-direction: alternate;
        transform-origin: center;
        transform-box: fill-box;
    }

    #astronaut_svg__pipe {
        @keyframes squiggle {
            from {
                transform: translateX(-50px);
            }
            to {
                transform: translateX(0px);
            }
        }
        animation: squiggle 10s linear infinite;
        animation-direction: alternate;
        transform-origin: center;
        transform-box: fill-box;
    }

    #astronaut_svg__right-arm {
        @keyframes right-arm-move {
            from {
                transform: rotate(3deg) translate3d(-5px, 2px, 0);
            }
            to {
                transform: rotate(0deg) translate3d(0, 0, 0);
            }
        }
        animation: right-arm-move 5s linear infinite;
        animation-direction: alternate;
        transform-origin: center;
        transform-box: fill-box;
    }

    #astronaut_svg__left-arm {
        @keyframes left-arm-move {
            from {
                transform: rotate(-2deg) translate3d(2px, 2px, 0);
            }
            to {
                transform: rotate(0deg) translate3d(0, 0, 0);
            }
        }
        animation: left-arm-move 5s linear infinite;
        animation-direction: alternate;
        transform-origin: center;
        transform-box: fill-box;
    }

    @keyframes legs-move {
        from {
            transform: rotate(-8deg) translate3d(13px, 5px, 0);
        }
        to {
            transform: rotate(0deg) translate3d(0, 0, 0);
        }
    }

    #astronaut_svg__left-leg,
    #astronaut_svg__right-leg {
        animation: legs-move 8s linear infinite;
        animation-direction: alternate;
        transform-origin: center;
        transform-box: fill-box;
    }
`

export const HeroText = styled.div`
    h3 {
        color: ${theme.palette.highlight};
    }
    h1 {
        font-weight: 500;
    }
`

export const CheckoutInidcator = styled.p`
    position: absolute;
    bottom: ${theme.space.sm};
    left: 50%;
    bottom: 3vh;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: opacity 0.5s;
    opacity: 1;
    z-index: 2;

    #checkout-indicator-arrow {
        @keyframes indicator-float {
            from {
                transform: translateY(0px);
            }
            to {
                transform: translateY(10px);
            }
        }
        animation: indicator-float 1.5s linear infinite;
        animation-direction: alternate;
    }

    &.hidden {
        opacity: 0;
    }
`
