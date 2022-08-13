import React from "react"
import {useAppSelector} from "../../services/redux/hooks"
import {RootState} from "../../services/redux/store"
import __ from "../../lang"

export default function Skills() {
    const skills = useAppSelector((state: RootState) => state.skills)

    return <>
        <p className="font-medium text-xl mb-3">
            {__('skills')}
        </p>

        <div className="grid grid-cols-6 gap-1">
            {skills.map((skill, i) => <span className="badge" key={i}>
                {skill}
            </span>)}
        </div>
    </>
}
