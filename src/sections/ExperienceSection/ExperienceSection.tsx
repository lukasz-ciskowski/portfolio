import React from "react"
import { Element } from "react-scroll"
import ExperienceBox from "components/ExperienceBox/ExperienceBox"
import { SECTIONS } from "components/Nav/sections"
import { EXPERIENCES } from "./experiences"
import * as S from "./styles"
import Rocket from "/public/images/rocket.svg"
import SectionContainer from "components/SectionContainer/SectionContainer"

function ExperienceSection() {
    return (
        <S.Section>
            <Element name={SECTIONS.Experience}>
                <SectionContainer>
                    <h1 data-aos="fade-right">
                        <span className="highlight">Exp</span>erience
                    </h1>
                    <S.RocketWrapper
                        data-aos="rocket"
                        data-aos-duration="1000"
                        data-aos-offset="300"
                    >
                        <Rocket />
                    </S.RocketWrapper>
                    <S.ExperiencesList>
                        {EXPERIENCES.map((exp, id) => (
                            <ExperienceBox entry={exp} key={id} index={id} />
                        ))}
                    </S.ExperiencesList>
                </SectionContainer>
            </Element>
        </S.Section>
    )
}

export default ExperienceSection
