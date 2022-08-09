import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

interface Props {content: string}

export default function PortfolioUrl({content}: Props) {
    return <>
        {content !== '' && <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faLink} size='sm' />
            <p className="ml-2">{content}</p>
        </div>}
    </>
}
