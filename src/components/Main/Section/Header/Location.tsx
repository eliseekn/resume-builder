import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"

interface Props {content: string}

export default function Location({content}: Props) {
    return  <>
        {content !== '' && <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="ml-2">{content}</p>
        </div>}
    </>
}
