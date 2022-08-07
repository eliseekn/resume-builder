import React from "react"
import moment from "moment";
import List from "../../../Style/List"

export interface Props {
    id: number,
    name: string,
    startDate: string,
    endDate: string,
    jobTitle: string,
    jobDescription: string
}

export default function Company({name, startDate, endDate, jobTitle, jobDescription}: Props) {
    const jobDescriptionToList = () => jobDescription.split('#')
    const setStartDate = () => moment(startDate).format('MMM YYYY')
    const setEndDate = () => moment(endDate).format('MMM YYYY')

    return <List>
        <li>
            <span className="font-medium italic">{jobTitle}</span> at <span className="font-medium italic">{name}</span> (<span className="italic">{setStartDate()} - {setEndDate()}</span>)
        </li>

        <ul className="list-disc ml-8 mt-2">
            {jobDescriptionToList().map((jobDescription, i) =>
                <li key={i}>{jobDescription}</li>
            )}
        </ul>
    </List>
}
