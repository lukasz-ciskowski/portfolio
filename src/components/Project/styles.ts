import styled from "styled-components"
import { theme } from "theme/theme"

export const Content = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    &:hover {
        .image {
            filter: blur(2px);
        }
        .description {
            opacity: 1;
        }
    }
`

interface PortfolioBoxProps {
    bgUrl: string
}

export const PortfolioBox = styled.div<PortfolioBoxProps>`
    width: 100%;
    height: 100%;
    background: url(${({ bgUrl }) => bgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    transition: filter 0.5s;
    filter: blur(0);
`

export const ReadMore = styled.div`
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.5s;
    filter: blur(-2px);
    position: absolute;
    inset: 0;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: ${theme.space.sm};
    max-width: 1000px;
    max-height: 500px;
    background-color: ${theme.palette.primary};
    border-radius: 20px;
    height: 100%;
    width: 100%;
    position: relative;
`

export const CloseButton = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    svg {
        width: 20px;
        height: 20px;
    }
`

export const ModalImageBox = styled.div<PortfolioBoxProps>`
    width: 400px;
    height: 100%;
    background: url(${({ bgUrl }) => bgUrl});
    background-size: cover;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`

export const ModalContentText = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: ${theme.space.sm};
    row-gap: ${theme.space.sm};

    p,
    h1,
    h2,
    h3,
    h4 {
        color: black;
    }

    p {
        color: ${theme.palette.secondary};
    }
`

export const IconsContent = styled.div`
    display: flex;
    column-gap: ${({ theme }) => theme.space.xs};
`

export const LinksWrapper = styled.div`
    display: flex;
    column-gap: ${theme.space.sm};
    margin-top: auto;
    margin-bottom: ${theme.space.sm};
    justify-content: center;

    a {
        text-decoration: none;
    }
`
