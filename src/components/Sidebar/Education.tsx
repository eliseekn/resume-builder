import React, {ChangeEvent, useState} from "react"
import {useAppDispatch, useAppSelector} from "../../services/redux/hooks"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown, faAngleUp, faMinus} from "@fortawesome/free-solid-svg-icons"
import {RootState} from "../../services/redux/store"
import {addEducation, removeEducation, Props} from "../../services/redux/reducers/educationReducer"
import {removeSection} from "../../services/redux/reducers/sectionsReducer"

export default function Education() {
    const dispatch = useAppDispatch()
    const educations = useAppSelector<Props[]>((state: RootState) => state.education)

    const [displayOptions, setDisplayOptions] = useState<boolean>(true)
    const [educationId, setEducationId] = useState<number>(1)
    const [education, setEducation] = useState<Props>({
        id: educationId,
        school: '',
        degree: '',
        startDate: '',
        endDate: ''
    })

    const handleSetSchoolName = (e: ChangeEvent<HTMLInputElement>) => {
        setEducation({...education, school: e.target.value})
    }

    const handleSetJobTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setEducation({...education, degree: e.target.value})
    }

    const handleSetStartDate = (e: ChangeEvent<HTMLInputElement>) => {
        setEducation({...education, startDate: e.target.value})
    }

    const handleSetEndDate = (e: ChangeEvent<HTMLInputElement>) => {
        setEducation({...education, endDate: e.target.value})
    }

    const handleAddEducation = () => {
        if (
            education.school === '' ||
            education.degree === '' ||
            education.startDate === '' ||
            education.endDate === ''
        ) {
            return alert('Please provide valid education infos')
        }

        if (educations.includes(education)) return alert('This education has already been added')

        setEducationId(educationId + 1)
        dispatch(addEducation({...education, id: educationId}))

        setEducation({
            id: educationId,
            school: '',
            degree: '',
            startDate: '',
            endDate: ''
        })
    }

    const handleRemoveEducation = (id: number) => {
        dispatch(removeEducation(id))
    }

    const handleRemoveSection = (section: string) => {
        dispatch(removeSection(section))
    }

    return <>
        <div className="flex items-center mt-3">
            <p className="section-header" onClick={() => setDisplayOptions(!displayOptions)}>
                <span>Education</span>
                <FontAwesomeIcon icon={displayOptions ? faAngleUp : faAngleDown} />
            </p>

            <button className="btn-circle" onClick={() => handleRemoveSection('education')}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>

        {displayOptions && <div className="ml-2 px-5">
            <div className="mt-3">
                <input type="search" className="rounded-lg w-full mb-3" placeholder="School name" value={education.school} onChange={handleSetSchoolName} />
                <input type="search" className="rounded-lg w-full mb-3" placeholder="Degree" value={education.degree} onChange={handleSetJobTitle} />

                <div className="flex items-center mb-3">
                    <input type="date" className="rounded-lg w-1/2 mr-3" placeholder="Start date" value={education.startDate} onChange={handleSetStartDate} />
                    <input type="date" className="rounded-lg w-1/2" placeholder="End date" value={education.endDate} onChange={handleSetEndDate} />
                </div>

                <button className="btn py-2 disabled:bg-gray-300 w-full" onClick={() => handleAddEducation()}>Add</button>

                <div className="mt-3 grid grid-cols-1 gap-1">
                    {educations.map(education => <div key={education.id} className="flex items-center justify-between badge">
                        <span>{education.degree} at {education.school}</span>
                        <span className="cursor-pointer px-1 font-bold" onClick={() => handleRemoveEducation(education.id)}>x</span>
                    </div>)}
                </div>
            </div>
        </div>}
    </>
}
