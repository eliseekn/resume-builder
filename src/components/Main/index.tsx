import React from "react"
import Experience from "./Experience"
import Education from "./Education"
import About from "./About"
import Header from "./Header"
import Skills from "./Skills"
import Certification from "./Certification"
import {useAppSelector} from "../../services/redux/hooks"
import {RootState} from "../../services/redux/store"

export default function Main() {
    const sections = useAppSelector<string[]>((state: RootState) => state.sections)

    return <div className="basis-full bg-gray-400 pt-5">
        <div className="p-8 mb-5 bg-white h-full w-[210mm] mx-auto" id="resume-content">
            {sections.includes('header') && <>
                <Header />
                <hr className="my-5" />
            </>}

            {sections.includes('about') && <>
                <About />
                <hr className="my-5" />
            </>}

            {sections.includes('skills') && <>
                <Skills />
                <hr className="my-5" />
            </>}

            {sections.includes('experience') && <>
                <Experience />
                <hr className="my-5" />
            </>}

            {sections.includes('education') && <>
                <Education />
                <hr className="my-5" />
            </>}

            {sections.includes('certification') && <>
                <Certification />
                <hr className="my-5" />
            </>}
        </div>
    </div>
}
