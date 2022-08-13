import React, {ChangeEvent, useState} from "react"
import {useAppDispatch, useAppSelector} from "../../services/redux/hooks"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown, faAngleUp, faMinus} from "@fortawesome/free-solid-svg-icons"
import {RootState} from "../../services/redux/store"
import {addCertification, removeCertification} from "../../services/redux/reducers/certificationReducer"
import {removeSection} from "../../services/redux/reducers/sectionsReducer"
import {Props} from "../../services/redux/reducers/certificationReducer"

export default function Certification() {
    const dispatch = useAppDispatch()
    const certifications = useAppSelector<Props[]>((state: RootState) => state.certification)

    const [displayOptions, setDisplayOptions] = useState<boolean>(false)
    const [certificationId, setCertificationId] = useState<number>(1)
    const [certification, setCertification] = useState<Props>({
        id: certificationId,
        name: '',
        organization: '',
        issueDate: '',
    })

    const handleSetOrganizationName = (e: ChangeEvent<HTMLInputElement>) => {
        setCertification({...certification, name: e.target.value})
    }

    const handleSetCertificationName = (e: ChangeEvent<HTMLInputElement>) => {
        setCertification({...certification, organization: e.target.value})
    }

    const handleSetIssueDate = (e: ChangeEvent<HTMLInputElement>) => {
        setCertification({...certification, issueDate: e.target.value})
    }

    const handleAddCertification = () => {
        if (
            certification.name === '' ||
            certification.organization === '' ||
            certification.issueDate === ''
        ) {
            return alert('Please provide valid certification infos')
        }

        if (certifications.includes(certification)) return alert('This certification has already been added')

        setCertificationId(certificationId + 1)
        dispatch(addCertification({...certification, id: certificationId}))

        setCertification({
            id: certificationId,
            name: '',
            organization: '',
            issueDate: '',
        })
    }

    const handleRemoveCertification = (id: number) => {
        dispatch(removeCertification(id))
    }

    const handleRemoveSection = (section: string) => {
        dispatch(removeSection(section))
    }

    return <>
        <div className="flex items-center mt-3">
            <p className="section-header" onClick={() => setDisplayOptions(!displayOptions)}>
                <span>Certification</span>
                <FontAwesomeIcon icon={displayOptions ? faAngleUp : faAngleDown} />
            </p>

            <button className="btn-circle" onClick={() => handleRemoveSection('certification')}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>

        {displayOptions && <div className="ml-2 px-5">
            <div className="mt-3">
                <input type="search" className="rounded-lg w-full mb-3" placeholder="Organization name" value={certification.name} onChange={handleSetOrganizationName} />
                <input type="search" className="rounded-lg w-full mb-3" placeholder="Certification name" value={certification.organization} onChange={handleSetCertificationName} />
                <input type="date" className="rounded-lg w-full mb-3" placeholder="Issue date" value={certification.issueDate} onChange={handleSetIssueDate} />

                <button className="btn py-2 disabled:bg-gray-300 w-full" onClick={() => handleAddCertification()}>Add</button>

                <div className="mt-3 grid grid-cols-1 gap-1">
                    {certifications.map(certification => <div key={certification.id} className="flex items-center justify-between badge">
                        <span>{certification.organization} at {certification.name}</span>
                        <span className="cursor-pointer px-1 font-bold" onClick={() => handleRemoveCertification(certification.id)}>x</span>
                    </div>)}
                </div>
            </div>
        </div>}
    </>
}
