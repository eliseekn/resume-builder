import React, {ChangeEvent, useState} from "react"
import {setAbout} from "../../services/redux/reducers/aboutReducer"
import {useAppDispatch} from "../../services/redux/hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

export default function About() {
    const dispatch = useAppDispatch()
    const [displayOptions, setDisplayOptions] = useState<boolean>(false)

    const handleSetAbout = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setAbout(e.target.value))
    }

    return <>
        <p className="cursor-pointer text-lg flex items-center justify-between border-2 px-5 py-2 rounded-lg mt-5" onClick={() => setDisplayOptions(!displayOptions)}>
            <span>About</span>
            <FontAwesomeIcon icon={displayOptions ? faAngleUp : faAngleDown} />
        </p>

        {displayOptions && <div className="ml-2 px-5">
            <div className="mt-5">
                <textarea
                    className="rounded-lg w-full"
                    onChange={handleSetAbout}
                    placeholder="Full-stack Web Developer with 3+ years of experience."
                    rows={5}
                ></textarea>
            </div>
        </div>}
    </>
}
