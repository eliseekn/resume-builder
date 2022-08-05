import React from "react"
import Title from "../../../Style/Title";
import School from "./School";
import {useAppSelector} from "../../../../services/redux/hooks";
import {RootState} from "../../../../services/redux/store";

export default function Education() {
    const schools = useAppSelector((state: RootState) => state.education)

    return <>
        <Title content="Education" />

        {schools.map((school, i) =>
            <School key={i} id={i} name={school.name} degrees={school.degrees} />
        )}
    </>
}
