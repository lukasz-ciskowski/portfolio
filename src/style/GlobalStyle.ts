import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Futura";
    src: url("/fonts/FuturaPTLight.otf");
    font-weight: 200;
  }
  @font-face {
    font-family: "Futura";
    src: url("/fonts/FuturaPTMedium.otf");
    font-weight: 400;
  }
  @font-face {
    font-family: "Futura";
    src: url("/fonts/FuturaPTDemi.otf");
    font-weight: 500;
  }
  @font-face {
    font-family: "Futura";
    src: url("/fonts/FuturaPTBold.otf");
    font-weight: 600;
  }
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.palette.background};
    overflow-x: hidden;
  }
  * {
    font-family: "Futura";
    box-sizing: border-box;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
  
  h4 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: normal;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: normal;
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSize.main};
  }
  a {
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, p {
    margin: 0;
    color: ${({ theme }) => theme.palette.primary}
  }
`
