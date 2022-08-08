import React from "react"
import List from "../../../Style/List"
import moment from "moment/moment"
import __ from "../../../../lang";
import {useAppSelector} from "../../../../services/redux/hooks";
import {RootState} from "../../../../services/redux/store";

export interface Props {
    id: number,
    name: string,
    certificationName: string
    issueDate: string,
}

export default function Organization({name, certificationName, issueDate}: Props) {
    const language = useAppSelector<string>((state: RootState) => state.language)

    const setIssueDate = () => {
        moment.locale(language)
        return moment(issueDate).format('MMM YYYY')
    }

    return <List>
        <li>
            <span className="font-medium italic">{certificationName}</span> {__('at')} <span className="font-medium italic">{name}</span> (<span className="italic">{setIssueDate()}</span>)
        </li>
    </List>
}
