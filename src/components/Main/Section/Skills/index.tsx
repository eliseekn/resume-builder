import React from "react"
import Title from "../../../Style/Title";
import Skill from "./Skill";

const skills = [
    'PHP',
    'Laravel',
    'Symfony',
    'React.js',
    'React Native',
    'Bootstrap',
]

export default function Skills() {
    return <>
        <Title content="Skills" />

        <div className="grid grid-cols-6 gap-1">
            {skills.map((skill, i) => <Skill key={i} content={skill} />)}
        </div>
    </>
}
