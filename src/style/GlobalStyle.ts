import { createGlobalStyle } from "styled-components"
import { theme } from "theme/theme"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.palette.background};
  }

  p {
    font-size: ${theme.fontSize.base};
  }
  
  h4 {
    font-size: ${theme.fontSize.medium};
    font-weight: normal;
  }
  h3 {
    font-size: ${theme.fontSize.large};
    font-weight: normal;
  }
  h2 {
    font-size: ${theme.fontSize.xl};
  }
  h1 {
    font-size: ${theme.fontSize.main};
  }
  a {
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, p {
    margin: 0;
    color: ${theme.palette.primary}
  }

  .highlight {
    color: ${theme.palette.highlight};
  }
`
