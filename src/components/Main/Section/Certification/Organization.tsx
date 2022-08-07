import React from "react"
import List from "../../../Style/List"
import moment from "moment/moment"

export interface Props {
    id: number,
    name: string,
    certificationName: string
    issueDate: string,
}

export default function Organization({name, certificationName, issueDate}: Props) {
    const setIssueDate = () => moment(issueDate).format('MMM YYYY')

    return <List>
        <li>
            <span className="font-medium italic">{certificationName}</span> at <span className="font-medium italic">{name}</span> (<span className="italic">{setIssueDate()}</span>)
        </li>
    </List>
}
