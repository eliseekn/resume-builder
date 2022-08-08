import React from "react"
import Title from "../../../Style/Title"
import Company, {Props} from "./Company"
import {useAppSelector} from "../../../../services/redux/hooks"
import {RootState} from "../../../../services/redux/store"
import __ from "../../../../lang"

export default function Experience() {
    const companies = useAppSelector<Props[]>((state: RootState) => state.experience)

    return <>
        <Title content={__('professional_experience')} />

        {companies.map(company =>
            <Company
                key={company.id}
                id={company.id}
                name={company.name}
                jobTitle={company.jobTitle}
                jobDescription={company.jobDescription}
                startDate={company.startDate}
                endDate={company.endDate}
            />
        )}
    </>
}
