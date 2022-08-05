import React from "react"

interface Props {content: string}

export default function Title({content}: Props) {
    return <p className="font-medium text-xl mb-3">
        {content}
    </p>
}
