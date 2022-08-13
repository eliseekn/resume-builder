import React from "react"
import {useAppSelector} from "../../services/redux/hooks"
import {RootState} from "../../services/redux/store"
import __ from "../../lang"

export default function About() {
    const about = useAppSelector((state: RootState) => state.about)

    return <>
        <p className="font-medium text-xl mb-3">
            {__('about')}
        </p>

        <p>{about}</p>
    </>
}
