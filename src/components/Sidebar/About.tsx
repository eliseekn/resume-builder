import React, {ChangeEvent, useState} from "react"
import {setAbout} from "../../services/redux/reducers/aboutReducer"
import {useAppDispatch, useAppSelector} from "../../services/redux/hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {RootState} from "../../services/redux/store";

export default function About() {
    const dispatch = useAppDispatch()
    const about = useAppSelector((state: RootState) => state.about)

    const [displayOptions, setDisplayOptions] = useState<boolean>(false)

    const handleSetAbout = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setAbout(e.target.value))
    }

    return <>
        <p className="section-header" onClick={() => setDisplayOptions(!displayOptions)}>
            <span>About</span>
            <FontAwesomeIcon icon={displayOptions ? faAngleUp : faAngleDown} />
        </p>

        {displayOptions && <div className="ml-2 px-5">
            <div className="mt-3">
                <textarea
                    className="rounded-lg w-full"
                    onChange={handleSetAbout}
                    placeholder="Full-stack Web Developer with 3+ years of experience."
                    rows={5}
                    style={{ resize: 'none' }}
                    value={about}
                ></textarea>
            </div>
        </div>}
    </>
}
