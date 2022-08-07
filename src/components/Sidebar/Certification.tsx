import React, {ChangeEvent, useState} from "react"
import {useAppDispatch, useAppSelector} from "../../services/redux/hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {Props} from "../Main/Section/Certification/Organization";
import {RootState} from "../../services/redux/store";
import {addCertification, removeCertification} from "../../services/redux/reducers/certificationReducer";

export default function Certification() {
    const dispatch = useAppDispatch()
    const organizations = useAppSelector<Props[]>((state: RootState) => state.certification)

    const [displayOptions, setDisplayOptions] = useState<boolean>(false)
    const [organizationId, setOrganizationId] = useState<number>(1)
    const [organization, setOrganization] = useState<Props>({
        id: organizationId,
        name: '',
        certificationName: '',
        issueDate: '',
    })

    const handleSetOrganizationName = (e: ChangeEvent<HTMLInputElement>) => {
        setOrganization({...organization, name: e.target.value})
    }

    const handleSetOrganizationCertificationName = (e: ChangeEvent<HTMLInputElement>) => {
        setOrganization({...organization, certificationName: e.target.value})
    }

    const handleSetOrganizationIssueDate = (e: ChangeEvent<HTMLInputElement>) => {
        setOrganization({...organization, issueDate: e.target.value})
    }

    const handleAddOrganization = () => {
        if (organization.name === '' || organization.certificationName === '' || organization.issueDate === '') {
            return alert('Please provide valid certification infos')
        }

        if (organizations.includes(organization)) return alert('This certification has already been added')

        setOrganizationId(organizationId + 1)

        dispatch(addCertification({...organization, id: organizationId}))

        setOrganization({
            id: organizationId,
            name: '',
            certificationName: '',
            issueDate: '',
        })
    }

    const handleRemoveOrganization = (id: number) => {
        dispatch(removeCertification(id))
    }

    return <>
        <p className="section-header" onClick={() => setDisplayOptions(!displayOptions)}>
            <span>Certification</span>
            <FontAwesomeIcon icon={displayOptions ? faAngleUp : faAngleDown} />
        </p>

        {displayOptions && <div className="ml-2 px-5">
            <div className="mt-3">
                <input type="search" className="rounded-lg w-full mb-3" placeholder="Organization name" value={organization.name} onChange={handleSetOrganizationName} />
                <input type="search" className="rounded-lg w-full mb-3" placeholder="Certification name" value={organization.certificationName} onChange={handleSetOrganizationCertificationName} />
                <input type="date" className="rounded-lg w-full mb-3" placeholder="Issue date" value={organization.issueDate} onChange={handleSetOrganizationIssueDate} />

                <button className="btn py-2 disabled:bg-gray-300 w-full" onClick={() => handleAddOrganization()}>Add</button>

                <div className="mt-3 grid grid-cols-1 gap-1">
                    {organizations.map(organization => <div key={organization.id} className="flex items-center justify-between badge">
                        <span>{organization.certificationName} at {organization.name}</span>
                        <span className="cursor-pointer px-1 font-bold" onClick={() => handleRemoveOrganization(organization.id)}>x</span>
                    </div>)}
                </div>
            </div>
        </div>}
    </>
}
