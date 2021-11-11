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

export const ProjectsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-template-rows: repeat(auto-fill, 350px);
    padding: ${theme.space.md};
    gap: ${theme.space.md};
`