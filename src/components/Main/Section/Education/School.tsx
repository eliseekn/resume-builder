import React from "react"
import SubTitle from "../../../Style/SubTitle"
import List from "../../../Style/List"

interface DegreeProps {
    title: string,
    startDate: string,
    endDate: string
}

interface Props {
    name: string,
    degrees: DegreeProps[]
}

export default function School({name, degrees}: Props) {
    return <>
        <SubTitle content={name} />

        <List>
            {degrees.map((degree, i) =>
                <li key={i}>
                    {degree.title} (<span className="italic">{degree.startDate} - {degree.endDate}</span>)
                </li>
            )}
        </List>
    </>
}
