import React from "react"
import * as S from "./styles"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}
function SectionContainer({ children, ...rest }: Props) {
    return <S.Content {...rest}>{children}</S.Content>
}

export default SectionContainer
