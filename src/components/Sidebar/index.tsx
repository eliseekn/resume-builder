import React, {ChangeEvent, useState} from "react"
import Header from "./Header"
import About from "./About"
import Skills from "./Skills"
import Experience from "./Experience"
import Education from "./Education"
import Certification from "./Certification"
import {useAppDispatch, useAppSelector} from "../../services/redux/hooks";
import {RootState} from "../../services/redux/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {addSection} from "../../services/redux/reducers/sectionsReducer";
import Separator from "../Style/Separator";

export default function Sidebar() {
    const dispatch = useAppDispatch()
    const sections = useAppSelector<string[]>((state: RootState) => state.sections)

    const [section, setSection] = useState<string>('')

    const handleSetSection = (e: ChangeEvent<HTMLSelectElement>) => {
        setSection(e.target.value)
    }

    const handleAddSection = () => {
        dispatch(addSection(section))
    }

    return <div className="basis-1/4 border-r-2 p-5 h-screen sticky top-0 overflow-y-scroll">
        <div className="flex items-center">
            <select name="sections" id="sections" className="w-full rounded-lg cursor-pointer" onChange={handleSetSection} defaultValue="">
                <option value="">Select a section</option>
                <option value="header">Header</option>
                <option value="about">About</option>
                <option value="skills">Skills</option>
                <option value="experience">Professional Experience</option>
                <option value="education">Education</option>
                <option value="certification">Certification</option>
            </select>

            <button className="btn-circle" onClick={() => handleAddSection()}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>

        <Separator />

        {sections.includes('header') && <Header />}
        {sections.includes('about') && <About />}
        {sections.includes('skills') && <Skills />}
        {sections.includes('experience') && <Experience />}
        {sections.includes('education') && <Education />}
        {sections.includes('certification') && <Certification />}
    </div>
}
