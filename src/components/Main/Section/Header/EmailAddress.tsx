import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

interface Props {content: string}

export default function EmailAddress({content}: Props) {
    return <>
        {content !== '' && <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="ml-2">{content}</p>
        </div>}
    </>
}
