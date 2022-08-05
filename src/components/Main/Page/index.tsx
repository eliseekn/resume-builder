import React from "react"

interface Props {
    children?: React.ReactNode
}

export default function Page({children}: Props) {
    return <div className="p-8 mb-5 bg-white" style={{ height: "297mm", width: "210mm", marginInline: "auto" }}>
        {children}
    </div>
}
