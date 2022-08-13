import React from "react"
import {useAppSelector} from "../../services/redux/hooks"
import {RootState} from "../../services/redux/store"
import __ from "../../lang"
import moment from "moment/moment"
import 'moment/locale/fr'
import 'moment/locale/en-gb'
import {Props} from "../../services/redux/reducers/certificationReducer"

export default function Certification() {
    const language = useAppSelector<string>((state: RootState) => state.language)
    const certifications = useAppSelector<Props[]>((state: RootState) => state.certification)

    const setIssueDate = (issueDate: string) => {
        moment.locale(language)
        return moment(issueDate).format('ll')
    }

    return <>
        <p className="font-medium text-xl mb-3">
            {__('certifications')}
        </p>

        <ul className="list-disc ml-10 mt-3">
            {certifications.map(certification =>
                <li key={certification.id}>
                    <span className="font-medium italic">{certification.name}</span> {__('at')} <span className="font-medium italic">{certification.organization}</span> (<span className="italic">{setIssueDate(certification.issueDate)}</span>)
                </li>
            )}
        </ul>
    </>
}
