import React from "react"
import FullName from "./FullName"
import JobTitle from "./JobTitle"
import Location from "./Location"
import PhoneNumber from "./PhoneNumber"
import EmailAddress from "./EmailAddress"
import PortfolioUrl from "./PortfolioUrl"
import {useAppSelector} from "../../../../services/redux/hooks";
import {RootState} from "../../../../services/redux/store";

export default function Header() {
    const header = useAppSelector((state: RootState) => state.header)

    return <div className="text-center">
        <FullName content={header.fullName} />
        <JobTitle content={header.jobTitle} />

        <div className="flex justify-center items-center gap-x-5 mt-3">
            <Location content={header.location} />
            <PhoneNumber content={header.phoneNumber} />
        </div>

        <div className="flex justify-center items-center gap-x-5 mt-2">
            <EmailAddress content={header.emailAddress} />
            <PortfolioUrl content={header.portfolioUrl} />
        </div>
    </div>
}
