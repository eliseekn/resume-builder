import React from "react"
import List from "../../../Style/List"
import moment from "moment/moment"

export interface Props {
    id: number,
    name: string,
    degree: string
    endDate: string,
    startDate: string,
}

export default function School({name, degree, startDate, endDate}: Props) {
    const setStartDate = () => moment(startDate).format('MMM YYYY')
    const setEndDate = () => moment(endDate).format('MMM YYYY')

    return <List>
        <li>
            <span className="font-medium italic">{degree}</span> at <span className="font-medium italic">{name}</span> (<span className="italic">{setStartDate()} - {setEndDate()}</span>)
        </li>
    </List>
}
