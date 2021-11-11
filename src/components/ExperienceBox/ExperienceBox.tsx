import React from "react"
import * as S from "./styles"
import { CompanyEntry } from "./types"
import Image from "next/image"
import { Tooltip } from "@material-ui/core"
import TechnologyIcon from "components/TechnologyIcon/TechnologyIcon"

interface Props {
    entry: CompanyEntry
    index: number
}

function ExperienceBox({
    index,
    entry: { beginsAt, endsAt, company, position, description, partTimeExp, technologies },
}: Props) {
    return (
        <S.Container>
            <S.TextSection
                data-aos={index % 2 === 1 ? "fade-left" : "fade-right"}
                data-aos-duration="700"
            >
                <S.RowContent>
                    {partTimeExp && <S.PartTimeText>Part time experience</S.PartTimeText>}
                </S.RowContent>
                <S.RowContent>
                    <h2>{company}</h2>
                    <S.PositionText>{position}</S.PositionText>
                </S.RowContent>
                <S.Description>{description}</S.Description>
                <S.IconsContent>
                    {technologies.map((tech, index) => (
                        <TechnologyIcon
                            title={tech}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-offset="-100"
                            key={index}
                        />
                    ))}
                </S.IconsContent>
            </S.TextSection>
            <S.DatesSection
                data-aos={index % 2 === 1 ? "fade-right" : "fade-left"}
                data-aos-duration="700"
                className="experience-data"
            >
                <h3>{endsAt || "Present"}</h3>
                <h3>{beginsAt}</h3>
            </S.DatesSection>
        </S.Container>
    )
}

export default ExperienceBox
