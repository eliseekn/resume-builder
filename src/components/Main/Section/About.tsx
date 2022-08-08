import React from "react"
import Title from "../../Style/Title"
import {useAppSelector} from "../../../services/redux/hooks"
import {RootState} from "../../../services/redux/store"
import __ from "../../../lang"

export default function About() {
    const about = useAppSelector((state: RootState) => state.about)

    return <>
        <Title content={__('about')} />
        <p>{about}</p>
    </>
}
