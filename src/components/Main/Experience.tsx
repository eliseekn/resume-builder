import React from "react"
import {useAppSelector} from "../../services/redux/hooks"
import {RootState} from "../../services/redux/store"
import __ from "../../lang"
import moment from "moment/moment"
import 'moment/locale/fr'
import 'moment/locale/en-gb'
import {Props} from '../../services/redux/reducers/experienceReducer'

export default function Experience() {
    const language = useAppSelector<string>((state: RootState) => state.language)
    const experiences = useAppSelector<Props[]>((state: RootState) => state.experience)

    const jobDescriptionToList = (jobDescription: string) => jobDescription.split('#')

    const setPeriod = (startDate: string, endDate: string) => {
        moment.locale(language)

        return <span className="italic">
            {moment(startDate).format('ll')} - {moment(endDate).format('ll')}
        </span>
    }

    return <>
        <p className="font-medium text-xl mb-3">
            {__('experience')}
        </p>

        <ul className="list-disc ml-10 mt-3">
            {experiences.map(experience => <div key={experience.id}>
                <li>
                    <span className="font-medium italic">{experience.jobTitle}</span> {__('at')} <span className="font-medium italic">{experience.company}</span> (<span className="italic">{setPeriod(experience.startDate, experience.endDate)}</span>)
                </li>

                <ul className="list-disc ml-8 mt-2">
                    {jobDescriptionToList(experience.jobDescription).map((jobDescription, j) =>
                        <li key={j}>{jobDescription}</li>
                    )}
                </ul>
            </div>)}
        </ul>
    </>
}
