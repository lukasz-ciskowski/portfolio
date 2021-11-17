import { Button, CircularProgress, TextField } from "@material-ui/core"
import { SECTIONS } from "components/Nav/sections"
import React from "react"
import { Element } from "react-scroll"
import Contact from "/public/images/contact.svg"
import * as S from "./styles"
import { useContact } from "./hooks/useContact/useContact"
import SectionContainer from "components/SectionContainer/SectionContainer"

function ContactSection() {
    const { response, formErrors, onChange, onBlur, onSubmit } = useContact()

    return (
        <S.Section>
            <Element name={SECTIONS.Contact}>
                <SectionContainer>
                    <h1 data-aos="fade-right">
                        <span className="highlight">Contact</span> me
                    </h1>
                    <S.Wrapper>
                        <S.ContactBox data-aos="fade-up">
                            {(response?.state === "loading" || response?.state === "success") && (
                                <S.FloatingLoading data-aos="fade-in" data-aos-duration="300">
                                    {response.state === "loading" && (
                                        <CircularProgress color="primary" size={80} />
                                    )}
                                    {response.state === "success" && (
                                        <>
                                            <h2 data-aos="fade-in">Thank you!</h2>
                                            <p data-aos="fade-in" data-aos-delay="200">
                                                I will try to reply you as soon as possible.
                                            </p>
                                        </>
                                    )}
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
                </SectionContainer>
            </Element>
        </S.Section>
    )
}

export default ContactSection
