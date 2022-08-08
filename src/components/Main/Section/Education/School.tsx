import React from "react"
import List from "../../../Style/List"
import moment from "moment/moment"
import 'moment/locale/fr'
import 'moment/locale/en-gb'
import __ from "../../../../lang"
import {useAppSelector} from "../../../../services/redux/hooks";
import {RootState} from "../../../../services/redux/store";

export interface Props {
    id: number,
    name: string,
    degree: string
    endDate: string,
    startDate: string,
}

export default function School({name, degree, startDate, endDate}: Props) {
    const language = useAppSelector<string>((state: RootState) => state.language)

    const setDate = () => {
        moment.locale(language)
        return <span className="italic">{moment(startDate).format('MMM YYYY')} - {moment(endDate).format('MMM YYYY')}</span>
    }

    return <List>
        <li>
            <span className="font-medium italic">{degree}</span> {__('at')} <span className="font-medium italic">{name}</span> ({setDate()})
        </li>
    </List>
}
