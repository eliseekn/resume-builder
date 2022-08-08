import React from "react"
import Title from "../../../Style/Title"
import School, {Props} from "./School";
import {useAppSelector} from "../../../../services/redux/hooks"
import {RootState} from "../../../../services/redux/store"
import __ from "../../../../lang"

export default function Education() {
    const schools = useAppSelector<Props[]>((state: RootState) => state.education)

    return <>
        <Title content={__('education')} />

        {schools.map(school =>
            <School
                key={school.id}
                id={school.id}
                name={school.name}
                degree={school.degree}
                startDate={school.startDate}
                endDate={school.endDate}
            />
        )}
    </>
}
