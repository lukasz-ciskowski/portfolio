import { Button, TextField } from "@material-ui/core"
import { SECTIONS } from "components/Nav/sections"
import React from "react"
import { Element } from "react-scroll"
import Contact from "/public/images/contact.svg"
import * as S from "./styles"

function ContactSection() {
    return (
        <S.Section>
            <Element name={SECTIONS.Contact}>
                <S.Content>
                    <h1 data-aos="fade-right">
                        <span className="project-highlight">Contact</span> me
                    </h1>
                    <S.ContactBox data-aos="fade-up">
                        <S.ContactFields>
                            <TextField label="Your email" />
                            <TextField label="Your question" multiline maxRows={20} minRows={8} />
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ width: "200px" }}
                            >
                                Send
                            </Button>
                        </S.ContactFields>
                        <Contact data-aos="fade-up" data-aos-delay="200" />
                    </S.ContactBox>
                </S.Content>
            </Element>
        </S.Section>
    )
}

export default ContactSection
