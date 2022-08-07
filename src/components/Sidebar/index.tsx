import React from "react"
import Header from "./Header"
import About from "./About"
import Skills from "./Skills"
import Experience from "./Experience";
import Education from "./Education";
import Certification from "./Certification";

export default function Sidebar() {
    return <div className="basis-1/4 border-r-2 p-5 h-screen sticky top-0 overflow-y-scroll">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certification />
    </div>
}
