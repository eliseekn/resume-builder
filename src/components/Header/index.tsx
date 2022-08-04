import React from "react"

export default function Header() {
    return <div className="p-5 border-b-2">
        <div className="flex justify-between items-center">
            <h1 className="font-medium text-2xl">Resume Builder <small>(v0.1)</small></h1>

            <div>
                <button className="py-2 px-5 mr-3 border-2 rounded-lg">Download PDF</button>
                <button className="py-2 px-5 border-2 rounded-lg">View source</button>
            </div>
        </div>
    </div>
}
