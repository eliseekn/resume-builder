import React from "react"

interface Props {content: string}

export default function JobTitle({content}: Props) {
    return <p className="font-medium text-2xl mt-3">{content}</p>
}
