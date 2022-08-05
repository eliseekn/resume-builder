import React from "react"
import Title from "../../Style/Title"
import {useAppSelector} from "../../../services/redux/hooks";
import {RootState} from "../../../services/redux/store";

export default function About() {
    const about = useAppSelector((state: RootState) => state.about)

    return <>
        <Title content="About" />
        <p>{about}</p>
    </>
}
