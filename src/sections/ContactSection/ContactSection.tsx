import { Button, CircularProgress, TextField } from "@material-ui/core"
import { SECTIONS } from "components/Nav/sections"
import React from "react"
import { Element } from "react-scroll"
import Contact from "/public/images/contact.svg"
import * as S from "./styles"
import { useContact } from "./hooks/useContact/useContact"

function ContactSection() {
    const { response, formErrors, onChange, onBlur, onSubmit } = useContact()

    return (
        <S.Section>
            <Element name={SECTIONS.Contact}>
                <S.Content>
                    <h1 data-aos="fade-right">
                        <span className="project-highlight">Contact</span> me
                    </h1>
                    <S.Wrapper>
                        <S.ContactBox data-aos="fade-up">
                            {response?.state === "loading" && (
                                <S.FloatingLoading data-aos="fade-in" data-aos-duration="300">
                                    <CircularProgress color="primary" size={80} />
                                </S.FloatingLoading>
                            )}
                            <S.ContactFields>
                                <TextField
                                    label="Your email"
                                    name="email"
                                    onChange={onChange("email")}
                                    onBlur={onBlur}
                                    error={!!formErrors.errors.email}
                                    helperText={formErrors.errors.email}
                                />
                                <TextField
                                    label="Your question"
                                    multiline
                                    rows={8}
                                    onChange={onChange("message")}
                                    onBlur={onBlur}
                                    error={!!formErrors.errors.message}
                                    helperText={formErrors.errors.message}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ width: "200px" }}
                                    onClick={onSubmit}
                                    disabled={!formErrors.valid}
                                >
                                    Send
                                </Button>
                            </S.ContactFields>
                            <Contact id="contact-rocket" data-aos="fade-up" data-aos-delay="200" />
                        </S.ContactBox>
                    </S.Wrapper>
                </S.Content>
            </Element>
        </S.Section>
    )
}

export default ContactSection
