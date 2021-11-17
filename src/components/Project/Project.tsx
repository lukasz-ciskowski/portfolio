import React, { useState } from "react"
import { ProjectEntry } from "./types"
import * as S from "./styles"
import { Button, Chip, IconButton, Modal } from "@material-ui/core"
import CloseButton from "/public/images/close.svg"

interface Props {
    entry: ProjectEntry
}

function Project({ entry: { imageSrc, name, description, libraries, gitUrl, demoUrl } }: Props) {
    const [modalOpen, setModalOpen] = useState(false)

    const handleOpen = () => setModalOpen(true)
    const handleClose = () => setModalOpen(false)

    return (
        <S.Content>
            <S.PortfolioBox bgUrl={`/images/projects/${imageSrc}-small.png`} className="image" />
            <S.ReadMore className="description">
                <Button variant="contained" color="primary" size="large" onClick={handleOpen}>
                    Read more
                </Button>
            </S.ReadMore>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                <S.ModalContent data-aos="fade-in" data-aos-duration="200">
                    <S.CloseButton>
                        <IconButton size="medium" onClick={handleClose}>
                            <CloseButton />
                        </IconButton>
                    </S.CloseButton>
                    <S.ModalImageBox bgUrl={`/images/projects/${imageSrc}.png`} className="image" />
                    <S.ModalContentText>
                        <div>
                            <p>Project</p>
                            <h2>{name}</h2>
                        </div>
                        <div>
                            <p>Description</p>
                            <h4>{description}</h4>
                        </div>
                        <div>
                            <p>Libraries used</p>
                            <S.IconsContent>
                                {libraries.map((lib, index) => (
                                    <Chip label={lib} key={index} />
                                ))}
                            </S.IconsContent>
                        </div>
                        <S.LinksWrapper>
                            {demoUrl && (
                                <a target="_blank" href={demoUrl}>
                                    <Button variant="contained" color="primary" size="large">
                                        Open live demo
                                    </Button>
                                </a>
                            )}
                            {gitUrl && (
                                <a target="_blank" href={demoUrl}>
                                    <Button variant="contained" color="primary" size="large">
                                        View code
                                    </Button>
                                </a>
                            )}
                        </S.LinksWrapper>
                    </S.ModalContentText>
                </S.ModalContent>
            </Modal>
        </S.Content>
    )
}

export default Project
