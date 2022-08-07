import React from "react"
import Title from "../../../Style/Title"
import Company, {Props} from "./Company"
import {useAppSelector} from "../../../../services/redux/hooks"
import {RootState} from "../../../../services/redux/store"

export default function Experience() {
    const companies = useAppSelector<Props[]>((state: RootState) => state.experience)

    return <>
        <Title content="Professional Experience" />

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
