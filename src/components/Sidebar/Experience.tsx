import React, {ChangeEvent, useState} from "react"
import {useAppDispatch, useAppSelector} from "../../services/redux/hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp, faMinus} from "@fortawesome/free-solid-svg-icons";
import {Props} from "../Main/Section/Experience/Company";
import {RootState} from "../../services/redux/store";
import {addExperience, removeExperience} from "../../services/redux/reducers/experienceReducer";
import {removeSection} from "../../services/redux/reducers/sectionsReducer";

export default function Company() {
    const dispatch = useAppDispatch()
    const companies = useAppSelector<Props[]>((state: RootState) => state.experience)

    const [displayOptions, setDisplayOptions] = useState<boolean>(false)
    const [companyId, setCompanyId] = useState<number>(1)
    const [company, setCompany] = useState<Props>({
        id: companyId,
        name: '',
        jobTitle: '',
        jobDescription: '',
        startDate: '',
        endDate: ''
    })

    const handleSetCompanyName = (e: ChangeEvent<HTMLInputElement>) => {
        setCompany({...company, name: e.target.value})
    }

    const handleSetCompanyJobTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setCompany({...company, jobTitle: e.target.value})
    }

    const handleSetCompanyJobDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCompany({...company, jobDescription: e.target.value})
    }

    const handleSetCompanyStartDate = (e: ChangeEvent<HTMLInputElement>) => {
        setCompany({...company, startDate: e.target.value})
    }

    const handleSetCompanyEndDate = (e: ChangeEvent<HTMLInputElement>) => {
        setCompany({...company, endDate: e.target.value})
    }

    const handleAddCompany = () => {
        if (company.name === '' || company.jobDescription === '' || company.jobDescription === '' || company.startDate === '' || company.endDate === '') {
            return alert('Please provide valid experience infos')
        }

        if (companies.includes(company)) return alert('This experience has already been added')

        setCompanyId(companyId + 1)

        dispatch(addExperience({...company, id: companyId}))

        setCompany({
            id: companyId,
            name: '',
            jobTitle: '',
            jobDescription: '',
            startDate: '',
            endDate: ''
        })
    }

    const handleRemoveCompany = (id: number) => {
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
                <input type="search" className="rounded-lg w-full mb-3" placeholder="Company name" value={company.name} onChange={handleSetCompanyName} />
                <input type="search" className="rounded-lg w-full mb-3" placeholder="Job title" value={company.jobTitle} onChange={handleSetCompanyJobTitle} />

                <textarea
                    className="rounded-lg w-full mb-3"
                    onChange={handleSetCompanyJobDescription}
                    placeholder="Job description (separate with # to create a list)"
                    rows={5}
                    style={{ resize: 'none' }}
                    value={company.jobDescription}
                ></textarea>

                <div className="flex items-center mb-3">
                    <input type="date" className="rounded-lg w-1/2 mr-3" placeholder="Start date" value={company.startDate} onChange={handleSetCompanyStartDate} />
                    <input type="date" className="rounded-lg w-1/2" placeholder="End date" value={company.endDate} onChange={handleSetCompanyEndDate} />
                </div>

                <button className="btn py-2 disabled:bg-gray-300 w-full" onClick={() => handleAddCompany()}>Add</button>

                <div className="mt-3 grid grid-cols-1 gap-1">
                    {companies.map(company => <div key={company.id} className="flex items-center justify-between badge">
                        <span>{company.jobTitle} at {company.name}</span>
                        <span className="cursor-pointer px-1 font-bold" onClick={() => handleRemoveCompany(company.id)}>x</span>
                    </div>)}
                </div>
            </div>
        </div>}
    </>
}
