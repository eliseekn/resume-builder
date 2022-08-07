import React from "react"
import Title from "../../../Style/Title";
import {useAppSelector} from "../../../../services/redux/hooks";
import {RootState} from "../../../../services/redux/store";
import Organization, {Props} from "./Organization";

export default function Certification() {
    const organizations = useAppSelector<Props[]>((state: RootState) => state.certification)

    return <>
        <Title content="Certification" />

        {organizations.map(organization =>
            <Organization
                key={organization.id}
                id={organization.id}
                name={organization.name}
                certificationName={organization.certificationName}
                issueDate={organization.issueDate}
            />
        )}
    </>
}
