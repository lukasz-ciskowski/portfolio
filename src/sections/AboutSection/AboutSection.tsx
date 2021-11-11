import React from "react"
import { Element } from "react-scroll"
import { SECTIONS } from "components/Nav/sections"
import Image from "next/image"
import * as S from "./styles"

function AboutSection() {
    return (
        <S.Section>
            <Element name={SECTIONS.About}>
                <S.Content>
                    <h1 data-aos="fade-right">
                        <span className="about-highlight">About</span> Me
                    </h1>
                    <S.Description>
                        <S.TextWrapper data-aos="zoom-in" data-aos-delay="400">
                            <S.CommandPrompt>&gt;</S.CommandPrompt>
                            <p>
                                I do <span className="about-highlight">Frontend Development</span>{" "}
                                using <span className="about-highlight">#React</span> technology with
                                passion and love to the process of creation and design. In my career
                                I had an opportunity to participate in projects as a frontend and
                                backend developer. I am into methoring and passing my experience to
                                the people. Always eager to learn new technologies and
                                architectures. Personally I love playing & developing games, drawing
                                and psychology.
                            </p>
                        </S.TextWrapper>
                        <Image
                            src="/images/avatar.png"
                            width="350px"
                            height="350px"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        />
                    </S.Description>
                </S.Content>
            </Element>
        </S.Section>
    )
}

export default AboutSection
