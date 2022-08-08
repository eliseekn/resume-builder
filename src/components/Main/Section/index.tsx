import React from "react"
import Separator from "../../Style/Separator"

interface Props {name: React.ReactNode}

export default function Section({name}: Props) {
    return <>{name} <Separator /></>
}
