import React from "react"
import Title from "../../../Style/Title"
import Skill from "./Skill"
import {useAppSelector} from "../../../../services/redux/hooks"
import {RootState} from "../../../../services/redux/store"
import __ from "../../../../lang"

export default function Skills() {
    const skills = useAppSelector((state: RootState) => state.skills)

    return <>
        <Title content={__('skills')} />

        <div className="grid grid-cols-6 gap-1">
            {skills.map((skill, i) => <Skill key={i} content={skill} />)}
        </div>
    </>
}
