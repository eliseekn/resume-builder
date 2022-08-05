import React from "react"
import Title from "../../../Style/Title"
import Company from "./Company"

const companies = [
    {
        name: 'Company 1',
        jobs: [
            {
                title: 'Job 1',
                startDate: 'start date',
                endDate: 'end date',
                works: ['Work 1', 'Work 2', 'Work 3']
            },
        ]
    },

    {
        name: 'Company 2',
        jobs: [
            {
                title: 'Job 2',
                startDate: 'start date',
                endDate: 'end date',
                works: ['Work 1', 'Work 2', 'Work 3']
            },
        ]
    },
]

export default function Experience() {
    return <>
        <Title content="Professional Experience" />

        {companies.map((company, i) =>
            <Company key={i} name={company.name} jobs={company.jobs} />
        )}
    </>
}
