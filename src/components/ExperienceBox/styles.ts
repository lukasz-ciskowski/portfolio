import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &:nth-child(even) {
        flex-direction: row-reverse;
        .experience-data {
            h3:first-of-type {
                margin-left: ${({ theme }) => theme.space.xs};
            }
        }
    }
    .experience-data {
        h3:first-of-type {
            margin-left: -${({ theme }) => theme.space.xs};
        }
    }
`

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.space.xs};
    width: 75ch;
`

export const DatesSection = styled.div`
    h3 {
        &:first-of-type {
            color: ${({ theme }) => theme.palette.highlight};
        }
        letter-spacing: 0.4em;
    }
`

export const RowContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: ${({ theme }) => theme.space.sm};
`

export const IconsContent = styled(RowContent)`
    column-gap: ${({ theme }) => theme.space.xs};
`

export const PartTimeText = styled.p`
    font-weight: lighter;
    color: ${({ theme }) => theme.palette.secondary};
`

export const PositionText = styled.h3`
    color: ${({ theme }) => theme.palette.secondary};
`

export const Description = styled.p`
    text-align: justify;
`
