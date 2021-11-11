import { Tooltip } from "@material-ui/core"
import Image, { ImageProps } from "next/image"
import React from "react"

interface Props extends Omit<ImageProps, "src"> {
    title: string
}

function TechnologyIcon({ title, ...rest }: Props) {
    return (
        <Tooltip placement="bottom" title={title}>
            <span>
                <Image src={`/images/tech/${title}.svg`} width={30} height={30} {...rest} />
            </span>
        </Tooltip>
    )
}

export default TechnologyIcon
