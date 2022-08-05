import React from "react"
import Title from "../../../Style/Title"
import Company from "./Company"
import {useAppSelector} from "../../../../services/redux/hooks";
import {RootState} from "../../../../services/redux/store";

export default function Experience() {
    const companies = useAppSelector((state: RootState) => state.experience)

    return <>
        <Title content="Professional Experience" />

        {companies.map(company =>
            <Company key={company.id} id={company.id} name={company.name} jobs={company.jobs} />
        )}
    </>
}
