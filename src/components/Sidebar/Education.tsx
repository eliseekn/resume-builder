import React, {ChangeEvent, useState} from "react"
import {useAppDispatch, useAppSelector} from "../../services/redux/hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {Props} from "../Main/Section/Education/School";
import {RootState} from "../../services/redux/store";
import {addEducation, removeEducation} from "../../services/redux/reducers/educationReducer";

export default function Education() {
    const dispatch = useAppDispatch()
    const schools = useAppSelector<Props[]>((state: RootState) => state.education)

    const [displayOptions, setDisplayOptions] = useState<boolean>(false)
    const [schoolId, setSchoolId] = useState<number>(1)
    const [school, setSchool] = useState<Props>({
        id: schoolId,
        name: '',
        degree: '',
        startDate: '',
        endDate: ''
    })

    const handleSetSchoolName = (e: ChangeEvent<HTMLInputElement>) => {
        setSchool({...school, name: e.target.value})
    }

    const handleSetSchoolJobTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setSchool({...school, degree: e.target.value})
    }

    const handleSetSchoolStartDate = (e: ChangeEvent<HTMLInputElement>) => {
        setSchool({...school, startDate: e.target.value})
    }

    const handleSetSchoolEndDate = (e: ChangeEvent<HTMLInputElement>) => {
        setSchool({...school, endDate: e.target.value})
    }

    const handleAddSchool = () => {
        if (school.name === '' || school.degree === '' || school.startDate === '' || school.endDate === '') {
            return alert('Please provide valid education infos')
        }

        if (schools.includes(school)) return alert('This education has already been added')

        setSchoolId(schoolId + 1)

        dispatch(addEducation({...school, id: schoolId}))

        setSchool({
            id: schoolId,
            name: '',
            degree: '',
            startDate: '',
            endDate: ''
        })
    }

    const handleRemoveSchool = (id: number) => {
        dispatch(removeEducation(id))
    }

    return <>
        <p className="section-header" onClick={() => setDisplayOptions(!displayOptions)}>
            <span>Education</span>
            <FontAwesomeIcon icon={displayOptions ? faAngleUp : faAngleDown} />
        </p>

        {displayOptions && <div className="ml-2 px-5">
            <div className="mt-3">
                <input type="search" className="rounded-lg w-full mb-3" placeholder="School name" value={school.name} onChange={handleSetSchoolName} />
                <input type="search" className="rounded-lg w-full mb-3" placeholder="Degree" value={school.degree} onChange={handleSetSchoolJobTitle} />

                <div className="flex items-center mb-3">
                    <input type="date" className="rounded-lg w-1/2 mr-3" placeholder="Start date" value={school.startDate} onChange={handleSetSchoolStartDate} />
                    <input type="date" className="rounded-lg w-1/2" placeholder="End date" value={school.endDate} onChange={handleSetSchoolEndDate} />
                </div>

                <button className="btn py-2 disabled:bg-gray-300 w-full" onClick={() => handleAddSchool()}>Add</button>

                <div className="mt-3 grid grid-cols-1 gap-1">
                    {schools.map(school => <div key={school.id} className="flex items-center justify-between badge">
                        <span>{school.degree} at {school.name}</span>
                        <span className="cursor-pointer px-1 font-bold" onClick={() => handleRemoveSchool(school.id)}>x</span>
                    </div>)}
                </div>
            </div>
        </div>}
    </>
}
