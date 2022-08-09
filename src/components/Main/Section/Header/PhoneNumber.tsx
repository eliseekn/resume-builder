import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPhone} from "@fortawesome/free-solid-svg-icons";

interface Props {content: string}

export default function PhoneNumber({content}: Props) {
    return <>
        {content !== '' && <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faPhone} size='sm' />
            <p className="ml-2">{content}</p>
        </div>}
    </>
}
