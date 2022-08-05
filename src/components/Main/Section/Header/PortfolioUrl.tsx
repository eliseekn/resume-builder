import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

interface Props {content: string}

export default function PortfolioUrl({content}: Props) {
    return <>
        {content !== '' && <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faGlobe} />
            <p className="ml-2">{content}</p>
        </div>}
    </>
}
