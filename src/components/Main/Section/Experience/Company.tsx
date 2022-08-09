import React from "react"
import moment from "moment/moment"
import 'moment/locale/fr'
import 'moment/locale/en-gb'
import List from "../../../Style/List"
import __ from "../../../../lang"
import {useAppSelector} from "../../../../services/redux/hooks"
import {RootState} from "../../../../services/redux/store"

export interface Props {
    id: number,
    name: string,
    startDate: string,
    endDate: string,
    jobTitle: string,
    jobDescription: string
}

export default function Company({name, startDate, endDate, jobTitle, jobDescription}: Props) {
    const language = useAppSelector<string>((state: RootState) => state.language)

    const jobDescriptionToList = () => jobDescription.split('#')

    const setPeriod = () => {
        moment.locale(language)

        return <span className="italic">
            {moment(startDate).format('ll')} - {moment(endDate).format('ll')}
        </span>
    }

    return <List>
        <li>
            <span className="font-medium italic">{jobTitle}</span> {__('at')} <span className="font-medium italic">{name}</span> ({setPeriod()})
        </li>

        <ul className="list-disc ml-8 mt-2">
            {jobDescriptionToList().map((jobDescription, i) =>
                <li key={i}>{jobDescription}</li>
            )}
        </ul>
    </List>
}
