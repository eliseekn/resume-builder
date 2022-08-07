import React from "react"

export default function Header() {
    //https://github.com/mohitk30/Resumer/blob/main/src/components/Resumer.js
    const handleDownloadResume = () => {
        const frame = document.querySelector("#resume-frame") as HTMLIFrameElement

        frame.contentWindow?.document.open()
        frame.contentWindow?.document.write(
            document.querySelector("#resume-content")!.innerHTML
        )
        frame.contentWindow?.document.close()
        frame.contentWindow?.focus()
        frame.contentWindow?.print()
    }

    return <div className="p-3 border-b-2">
        <div className="flex justify-between items-center">
            <h1 className="font-medium text-2xl">Resume Builder <small>(v0.1)</small></h1>
            <button type="button" className="btn" onClick={() => handleDownloadResume()}>Download PDF</button>
            <iframe id="resume-frame" typeof="application/pdf" style={{ height: '0px', width: '0px', position: 'absolute' }} />
        </div>
    </div>
}
