import React from "react"
import Experience from "./Section/Experience"
import Education from "./Section/Education"
import Page from "./Page"
import About from "./Section/About"
import Header from "./Section/Header"
import Skills from "./Section/Skills"
import Section from "./Section"
import Certification from "./Section/Certification"
import {useAppSelector} from "../../services/redux/hooks";
import {RootState} from "../../services/redux/store";

export default function Main() {
    const sections = useAppSelector<string[]>((state: RootState) => state.sections)

    return <div className="basis-full bg-gray-400 pt-5">
        <Page>
            {sections.includes('header') && <Section name={<Header />} />}
            {sections.includes('about') && <Section name={<About />} />}
            {sections.includes('skills') && <Section name={<Skills />} />}
            {sections.includes('experience') && <Section name={<Experience />} />}
            {sections.includes('education') && <Section name={<Education />} />}
            {sections.includes('certification') && <Section name={<Certification />} />}
        </Page>
    </div>
}
