import styled from "styled-components"
import { theme } from "theme/theme"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &:nth-child(even) {
        flex-direction: row-reverse;
        .experience-data {
            h3:first-of-type {
                margin-left: ${theme.space.xs};
            }
        }
    }
    .experience-data {
        h3:first-of-type {
            margin-left: -${theme.space.xs};
        }
    }

    @media (max-width: 950px) {
        width: 100%;
        flex-direction: column-reverse;
        align-items: unset;
        .experience-data {
            text-align: right;
            h3:first-of-type {
                margin-right: ${theme.space.sm};
            }
        }
        &:nth-child(even) {
            flex-direction: column-reverse;
            margin-right: 0;

            .experience-data {
                text-align: right;
                h3:first-of-type {
                    margin-right: ${theme.space.sm};
                }
            }
        }
    }
`

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.space.xs};
    max-width: 75ch;
    width: 100%;
`

export const DatesSection = styled.div`
    h3 {
        &:first-of-type {
            color: ${theme.palette.highlight};
        }
        letter-spacing: 0.4em;
    }
    @media (max-width: 950px) {
        margin-bottom: ${theme.space.sm};
    }
`

export const RowContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: ${theme.space.sm};

    @media (max-width: 950px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const IconsContent = styled(RowContent)`
    column-gap: ${theme.space.xs};

    @media (max-width: 950px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export const PartTimeText = styled.p`
    font-weight: lighter;
    color: ${theme.palette.secondary};
`

export const PositionText = styled.h3`
    color: ${theme.palette.secondary};
`

export const Description = styled.p`
    text-align: justify;
`
