import styled from "styled-components";
import { theme } from "theme/theme";

export const Content = styled.div`
    max-width: 1400px;
    min-height: 70vh;
    margin: 0 auto;
    padding: ${theme.space.md};
    display: flex;
    justify-content: center;
    position: relative;
    flex-direction: column;
`
