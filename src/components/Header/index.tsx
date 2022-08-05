import React from "react"

export default function Header() {
    return <div className="p-3 border-b-2">
        <div className="flex justify-between items-center">
            <h1 className="font-medium text-2xl">Resume Builder <small>(v0.1)</small></h1>

            <div>
                <button type="button" className="btn mr-3">Generate PDF</button>
                <button type="button" className="btn">Generate HTML</button>
            </div>
        </div>
    </div>
}
