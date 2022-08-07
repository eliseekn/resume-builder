import React, {ChangeEvent, useState} from "react"
import {useAppDispatch, useAppSelector} from "../../services/redux/hooks"
import {addSkill, removeSkill} from "../../services/redux/reducers/skillsReducer"
import {RootState} from "../../services/redux/store"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
    const dispatch = useAppDispatch()
    const skills = useAppSelector((state: RootState) => state.skills)

    const [displayOptions, setDisplayOptions] = useState<boolean>(false)
    const [skill, setSkill] = useState<string>('')

    const handleSetSkill = (e: ChangeEvent<HTMLInputElement>) => {
        setSkill(e.target.value)
    }

    const handleAddSkill = () => {
        if (skill === '') return alert('Please provide a valid skill')
        if (skills.includes(skill)) return alert('This skill has already been added')

        dispatch(addSkill(skill))
        setSkill('')
    }

    const handleRemoveSkill = (_skill: string) => {
        dispatch(removeSkill(_skill))
    }

    return <>
        <p className="section-header" onClick={() => setDisplayOptions(!displayOptions)}>
            <span>Skills</span>
            <FontAwesomeIcon icon={displayOptions ? faAngleUp : faAngleDown} />
        </p>

        {displayOptions && <div className="ml-2 px-5">
            <div className="mt-3 flex items-center">
                <input type="text" className="rounded-lg w-full" placeholder="Skill name" value={skill} onChange={handleSetSkill} />
                <button className="btn ml-3 py-2 disabled:bg-gray-300" onClick={() => handleAddSkill()}>Add</button>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-1">
                {skills.map((skill, i) => <div key={i} className="flex items-center justify-between badge">
                    <span>{skill}</span>
                    <span className="cursor-pointer px-1 font-bold" onClick={() => handleRemoveSkill(skill)}>x</span>
                </div>)}
            </div>
        </div>}
    </>
}
