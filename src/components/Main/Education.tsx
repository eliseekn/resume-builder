import React from "react"
import {useAppSelector} from "../../services/redux/hooks"
import {RootState} from "../../services/redux/store"
import __ from "../../lang"
import moment from "moment/moment"
import 'moment/locale/fr'
import 'moment/locale/en-gb'
import {Props} from '../../services/redux/reducers/educationReducer'

export default function Education() {
    const language = useAppSelector<string>((state: RootState) => state.language)
    const educations = useAppSelector<Props[]>((state: RootState) => state.education)

    const setPeriod = (startDate: string, endDate: string) => {
        moment.locale(language)

        return <span className="italic">
            {moment(startDate).format('ll')} - {moment(endDate).format('ll')}
        </span>
    }

    return <>
        <p className="font-medium text-xl mb-3">
            {__('education')}
        </p>

        <ul className="list-disc ml-10 mt-3">
            {educations.map(education =>
                <li key={education.id}>
                    <span className="font-medium italic">{education.degree}</span> {__('at')} <span className="font-medium italic">{education.school}</span> (<span className="italic">{setPeriod(education.startDate, education.endDate)}</span>)
                </li>
            )}
        </ul>
    </>
}
