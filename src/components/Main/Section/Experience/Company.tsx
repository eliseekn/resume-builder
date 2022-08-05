import React from "react"
import SubTitle from "../../../Style/SubTitle"
import List from "../../../Style/List"

interface JobProps {
    title: string,
    startDate: string,
    endDate: string,
    works: string[]
}

interface Props {
    name: string,
    jobs: JobProps[]
}

export default function Company({name, jobs}: Props) {
    return <>
        <SubTitle content={name} />

        {
            jobs.map((job, i) => <List key={i}>
                <li>
                    {job.title} (<span className="italic">{job.startDate} - {job.endDate}</span>)
                </li>

                <List>
                    {job.works.map((work, j) =>
                        <li key={j}>{work}</li>
                    )}
                </List>
            </List>)
        }
    </>
}
