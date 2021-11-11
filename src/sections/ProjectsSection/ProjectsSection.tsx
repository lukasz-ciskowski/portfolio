import { SECTIONS } from "components/Nav/sections"
import Project from "components/Project/Project"
import React from "react"
import { Element } from "react-scroll"
import { PROJECTS } from "./projects"
import * as S from "./styles"

function ProjectsSection() {
    return (
        <S.Section>
            <Element name={SECTIONS.Projects}>
                <S.Content>
                    <h1 data-aos="fade-right">
                        <span className="project-highlight">Proj</span>ects
                    </h1>
                    <S.ProjectsList>
                        {PROJECTS.map((project, index) => (
                            <div data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                                <Project entry={project} />
                            </div>
                        ))}
                    </S.ProjectsList>
                </S.Content>
            </Element>
        </S.Section>
    )
}

export default ProjectsSection
