import React from "react"

interface Props {content: string}

export default function Skill({content}: Props) {
    return <span className="badge">
        {content}
    </span>
}
