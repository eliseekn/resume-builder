import React from "react"
import Title from "../../../Style/Title";
import SubTitle from "../../../Style/SubTitle";
import List from "../../../Style/List";

export default function Experience() {
    return <>
        <Title content="Professional Experience" />

        <div className="mt-5">
            <SubTitle content="Company name" />

            <List>
                <li className="italic">Title 1 (start date - end date)</li>

                <List bullet={true}>
                    <li>Job 1</li>
                    <li>Job 2</li>
                    <li>Job 3</li>
                </List>
            </List>

            <ul className="ml-10 mt-3">
                <li className="italic">Title 2 (start date - end date)</li>

                <ul className="list-disc ml-10 mt-3">
                    <li>Job 1</li>
                    <li>Job 2</li>
                    <li>Job 3</li>
                </ul>
            </ul>
        </div>
    </>
}
