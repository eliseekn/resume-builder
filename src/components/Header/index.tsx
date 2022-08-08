import React, {ChangeEvent} from "react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import {useAppDispatch} from "../../services/redux/hooks";
import {setLanguage} from "../../services/redux/reducers/languageReducer";

export default function Header() {
    const dispatch = useAppDispatch()

    //https://www.freakyjolly.com/multipage-canvas-pdf-using-jspdf/
    const handleDownloadResume = async () => {
        const htmlContainer = document.querySelector("#resume-content") as HTMLElement
        const htmlHeight = htmlContainer?.clientHeight
        const htmlWidth = htmlContainer?.clientWidth

        const pdfWidth = htmlWidth
        const pdfHeight = (pdfWidth * 1.5)
        const totalPDFPages = Math.ceil(pdfHeight/pdfWidth) - 1

        html2canvas(htmlContainer,{allowTaint:true})
            .then(canvas => {
                canvas.getContext('2d')

                const imgData = canvas.toDataURL("image/jpeg", 1.0)
                const pdf = new jsPDF('p', 'pt',  [pdfWidth, pdfHeight])

                pdf.addImage(imgData, 'JPG', 0, 0, htmlWidth, htmlHeight)

                for (let i = 1; i <= totalPDFPages; i++) {
                    pdf.addPage([pdfWidth, pdfHeight])
                    pdf.addImage(imgData, 'JPG', 0, - (pdfHeight * i), htmlWidth, htmlHeight)
                }

                pdf.save("resume.pdf")
            })
    }

    const handleSetLanguage =(e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLanguage(e.target.value))
    }

    return <div className="py-3 px-5 border-b-2">
        <div className="flex justify-between items-center">
            <h1 className="font-medium text-2xl">Resume Builder <small>(v0.1)</small></h1>

            <div>
                <select name="language" id="language" className="py-1 rounded-lg cursor-pointer mr-3" onChange={handleSetLanguage} defaultValue="en">
                    <option value="en">En</option>
                    <option value="fr">Fr</option>
                </select>

                <button type="button" className="btn" onClick={() => handleDownloadResume()}>
                    Download
                </button>
            </div>
        </div>
    </div>
}
