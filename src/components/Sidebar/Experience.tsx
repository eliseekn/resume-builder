import React, {ChangeEvent, useState} from "react"
import {useAppDispatch, useAppSelector} from "../../services/redux/hooks"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown, faAngleUp, faMinus} from "@fortawesome/free-solid-svg-icons"
import {RootState} from "../../services/redux/store"
import {addExperience, removeExperience, Props} from "../../services/redux/reducers/experienceReducer"
import {removeSection} from "../../services/redux/reducers/sectionsReducer"

export default function Experience() {
    const dispatch = useAppDispatch()
    const experiences = useAppSelector<Props[]>((state: RootState) => state.experience)

    const [displayOptions, setDisplayOptions] = useState<boolean>(true)
    const [experienceId, setExperienceId] = useState<number>(1)
    const [experience, setExperience] = useState<Props>({
        id: experienceId,
        company: '',
        jobTitle: '',
        jobDescription: '',
        startDate: '',
        endDate: ''
    })

    const handleSetCompanyName = (e: ChangeEvent<HTMLInputElement>) => {
        setExperience({...experience, company: e.target.value})
    }

    const handleSetJobTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setExperience({...experience, jobTitle: e.target.value})
    }

    const handleSetJobDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setExperience({...experience, jobDescription: e.target.value})
    }

    const handleSetStartDate = (e: ChangeEvent<HTMLInputElement>) => {
        setExperience({...experience, startDate: e.target.value})
    }

    const handleSetEndDate = (e: ChangeEvent<HTMLInputElement>) => {
        setExperience({...experience, endDate: e.target.value})
    }

    const handleAddExperience = () => {
        if (
            experience.company === '' ||
            experience.jobDescription === '' ||
            experience.jobDescription === '' ||
            experience.startDate === '' ||
            experience.endDate === ''
        ) {
            return alert('Please provide valid experience infos')
        }

        if (experiences.includes(experience)) return alert('This experience has already been added')

        setExperienceId(experienceId + 1)
        dispatch(addExperience({...experience, id: experienceId}))

        setExperience({
            id: experienceId,
            company: '',
            jobTitle: '',
            jobDescription: '',
            startDate: '',
            endDate: ''
        })
    }

    const handleRemoveExperience = (id: number) => {
        dispatch(removeExperience(id))
    }

    const handleRemoveSection = (section: string) => {
        dispatch(removeSection(section))
    }

    return <>
        <div className="flex items-center mt-3">
            <p className="section-header" onClick={() => setDisplayOptions(!displayOptions)}>
                <span>Professional Experience</span>
                <FontAwesomeIcon icon={displayOptions ? faAngleUp : faAngleDown} />
            </p>

            <button className="btn-circle" onClick={() => handleRemoveSection('experience')}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>

        {displayOptions && <div className="ml-2 px-5">
            <div className="mt-3">
                <input type="search" className="rounded-lg w-full mb-3" placeholder="Company name" value={experience.company} onChange={handleSetCompanyName} />
                <input type="search" className="rounded-lg w-full mb-3" placeholder="Job title" value={experience.jobTitle} onChange={handleSetJobTitle} />

                <textarea
                    className="rounded-lg w-full mb-3 resize-none"
                    onChange={handleSetJobDescription}
                    placeholder="Job description (separate with # to create a list)"
                    rows={5}
                    value={experience.jobDescription}
                ></textarea>

                <div className="flex items-center mb-3">
                    <input type="date" className="rounded-lg w-1/2 mr-3" placeholder="Start date" value={experience.startDate} onChange={handleSetStartDate} />
                    <input type="date" className="rounded-lg w-1/2" placeholder="End date" value={experience.endDate} onChange={handleSetEndDate} />
                </div>

                <button className="btn py-2 disabled:bg-gray-300 w-full" onClick={() => handleAddExperience()}>Add</button>

                <div className="mt-3 grid grid-cols-1 gap-1">
                    {experiences.map(experience => <div key={experience.id} className="flex items-center justify-between badge">
                        <span>{experience.jobTitle} at {experience.company}</span>
                        <span className="cursor-pointer px-1 font-bold" onClick={() => handleRemoveExperience(experience.id)}>x</span>
                    </div>)}
                </div>
            </div>
        </div>}
    </>
}
