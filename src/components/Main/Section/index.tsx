import React from "react"
import Separator from "../../Style/Separator"

interface Props {
    name: React.ReactNode,
    separator?: boolean
}

export default function Section({name, separator = true}: Props) {
    return <>
        {name}
        {separator && <Separator />}
    </>
}
