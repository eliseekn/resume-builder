import React from "react"
import Title from "../../../Style/Title";
import School from "./School";

const schools = [
    {
        name: 'School 1',
        degrees: [
            {title: 'Degree 1', startDate: 'start date', endDate: 'end date'},
            {title: 'Degree 2', startDate: 'start date', endDate: 'end date'},
        ]
    },

    {
        name: 'School 2',
        degrees: [
            {title: 'Degree 1', startDate: 'start date', endDate: 'end date'},
            {title: 'Degree 2', startDate: 'start date', endDate: 'end date'},
        ]
    }
]

export default function Education() {
    return <>
        <Title content="Education" />

        {schools.map((school, i) =>
            <School key={i} name={school.name} degrees={school.degrees} />
        )}
    </>
}
