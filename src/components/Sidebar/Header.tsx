import React, {ChangeEvent, useState} from "react"
import {setHeader} from "../../services/redux/reducers/headerReducer"
import {useAppDispatch, useAppSelector} from "../../services/redux/hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleUp, faAngleDown, faMinus} from "@fortawesome/free-solid-svg-icons";
import {RootState} from "../../services/redux/store";
import {removeSection} from "../../services/redux/reducers/sectionsReducer";

export default function Header() {
    const dispatch = useAppDispatch()
    const header = useAppSelector((state: RootState) => state.header)

    const [displayOptions, setDisplayOptions] = useState<boolean>(false)

    const handleSetFullName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setHeader({fullName: e.target.value}))
    }

    const handleSetJobTitle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setHeader({jobTitle: e.target.value}))
    }

    const handleSetEmailAddress = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setHeader({emailAddress: e.target.value}))
    }

    const handleSetPhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setHeader({phoneNumber: e.target.value}))
    }

    const handleSetLocation = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setHeader({location: e.target.value}))
    }

    const handleSetPortfolioUrl = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setHeader({portfolioUrl: e.target.value}))
    }

    const handleRemoveSection = (section: string) => {
        dispatch(removeSection(section))
    }

    return <>
        <div className="flex items-center mt-3">
            <div className="section-header" onClick={() => setDisplayOptions(!displayOptions)}>
                <span>Header</span>
                <FontAwesomeIcon icon={displayOptions ? faAngleUp : faAngleDown} />
            </div>

            <button className="btn-circle" onClick={() => handleRemoveSection('header')}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>

        {displayOptions && <div className="ml-2 px-5">
            <div className="mt-3">
                <label htmlFor="full-name">Full Name</label>
                <input type="search" className="rounded-lg w-full" id="full-name" value={header.fullName} placeholder="Elisée Kouadio N'Guessan" onChange={handleSetFullName} />
            </div>

            <div className="mt-3">
                <label htmlFor="job-title">Job Title</label>
                <input type="search" className="rounded-lg w-full" id="job-title" value={header.jobTitle} placeholder="Full-stack Web Developer" onChange={handleSetJobTitle} />
            </div>

            <div className="mt-3">
                <label htmlFor="location">Location</label>
                <input type="search" className="rounded-lg w-full" id="location" value={header.location} placeholder="Abidjan, Côte d'Ivoire" onChange={handleSetLocation} />
            </div>

            <div className="mt-3">
                <label htmlFor="email">Email Address</label>
                <input type="search" className="rounded-lg w-full" id="email" value={header.emailAddress} placeholder="eliseekn@gmail.com" onChange={handleSetEmailAddress} />
            </div>

            <div className="mt-3">
                <label htmlFor="phone-number">Phone Number</label>
                <input type="search" className="rounded-lg w-full" id="phone-number" value={header.phoneNumber} placeholder="(+225) 0759434291/0500471669" onChange={handleSetPhoneNumber} />
            </div>

            <div className="mt-3">
                <label htmlFor="portfolio">Portfolio Url</label>
                <input type="search" className="rounded-lg w-full" id="portfolio" value={header.portfolioUrl} placeholder="https://eliseekn.netlify.app" onChange={handleSetPortfolioUrl} />
            </div>
        </div>}
    </>
}
