import React from "react"

export default function Education() {
    return <>
        <p className="font-medium text-xl">Education</p>

        <div className="mt-5">
            <p className="font-medium">School name</p>

            <ul className="list-disc ml-10 mt-3">
                <li>Degree 1 (start date - end date)</li>
                <li>Degree 2 (start date - end date)</li>
                <li>Degree 3 (start date - end date)</li>
            </ul>
        </div>
    </>
}
