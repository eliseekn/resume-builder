import React from "react"
import Experience from "./Section/Experience"
import Education from "./Section/Education"
import Page from "./Page"
import About from "./Section/About"
import Header from "./Section/Header"
import Skills from "./Section/Skills"
import Section from "./Section";
import Certification from "./Section/Certification";

export default function Main() {
    return <div className="basis-full bg-gray-400 pt-5">
        <Page>
            <Section name={<Header />} />
            <Section name={<About />} />
            <Section name={<Skills />} />
            <Section name={<Experience />} />
            <Section name={<Education />} />
            <Section name={<Certification />} />
        </Page>
    </div>
}
