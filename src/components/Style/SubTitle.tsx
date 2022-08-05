import React from "react"

interface Props {content: string}

export default function SubTitle({content}: Props) {
    return <p className="font-medium">
        {content}
    </p>
}
