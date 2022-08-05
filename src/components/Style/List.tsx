import React from "react"

interface Props {children?: React.ReactNode,}

export default function List({children}: Props) {
    return <ul className="list-disc ml-10 mt-3">
        {children}
    </ul>
}
