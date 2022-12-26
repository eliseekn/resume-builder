import React, {ChangeEvent, useState} from "react"
import {setAbout} from "../../services/redux/reducers/aboutReducer"
import {useAppDispatch, useAppSelector} from "../../services/redux/hooks"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown, faAngleUp, faMinus} from "@fortawesome/free-solid-svg-icons"
import {RootState} from "../../services/redux/store"
import {removeSection} from "../../services/redux/reducers/sectionsReducer"

export default function About() {
    const dispatch = useAppDispatch()
    const about = useAppSelector((state: RootState) => state.about)

    const [displayOptions, setDisplayOptions] = useState<boolean>(true)

    const handleSetAbout = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setAbout(e.target.value))
    }

    const handleRemoveSection = (section: string) => {
        dispatch(removeSection(section))
    }

    return <>
        <div className="flex items-center mt-3">
            <p className="section-header" onClick={() => setDisplayOptions(!displayOptions)}>
                <span>About</span>
                <FontAwesomeIcon icon={displayOptions ? faAngleUp : faAngleDown} />
            </p>

            <button className="btn-circle" onClick={() => handleRemoveSection('about')}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>

        {displayOptions && <div className="ml-2 px-5">
            <div className="mt-3">
                <textarea
                    className="rounded-lg w-full resize-none"
                    onChange={handleSetAbout}
                    placeholder="I have 3+ years experience in user interfaces and web app development."
                    rows={5}
                    value={about}
                ></textarea>
            </div>
        </div>}
    </>
}
