import React from "react"

interface Props {content: string}

export default function FullName({content}: Props) {
    return <p className="font-medium">{content}</p>
}
