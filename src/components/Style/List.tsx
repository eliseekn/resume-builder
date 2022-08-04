import React from "react"

interface Props {
    children?: React.ReactNode
    bullet?: boolean
}

export default function List({bullet = false, children}: Props) {
    return <ul className={bullet ? "list-disc ml-10 mt-3" : "ml-10 mt-3"}>
        {children}
    </ul>
}
