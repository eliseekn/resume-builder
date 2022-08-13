import React from "react"
import {useAppSelector} from "../../services/redux/hooks"
import {RootState} from "../../services/redux/store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLink, faLocationDot, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    const header = useAppSelector((state: RootState) => state.header)

    return <div className="text-center">
        <p className="font-medium">{header.fullName} </p>
        <p className="font-medium text-2xl mt-3">{header.jobTitle}</p>

        <div className="flex justify-center items-center gap-x-5 mt-3">
            {header.location !== '' && <div className="flex flex-row items-center">
                <FontAwesomeIcon icon={faLocationDot} size='sm' />
                <p className="ml-2">{header.location}</p>
            </div>}

            {header.phoneNumber !== '' && <div className="flex flex-row items-center">
                <FontAwesomeIcon icon={faPhone} size='sm' />
                <p className="ml-2">{header.phoneNumber}</p>
            </div>}
        </div>

        <div className="flex justify-center items-center gap-x-5 mt-2">
            {header.emailAddress !== '' && <div className="flex flex-row items-center">
                <FontAwesomeIcon icon={faEnvelope} size='sm' />
                <p className="ml-2">{header.emailAddress}</p>
            </div>}

            {header.portfolioUrl !== '' && <div className="flex flex-row items-center">
                <FontAwesomeIcon icon={faLink} size='sm' />
                <p className="ml-2">{header.portfolioUrl}</p>
            </div>}
        </div>
    </div>
}
