import React from "react"
import Header from "./Header"
import About from "./About"
import Skills from "./Skills"

export default function Sidebar() {
    return <div className="basis-1/4 border-r-2 p-5 h-screen sticky top-0 overflow-y-scroll">
        <h2 className="font-bold text-lg">Sections</h2>

        <Header />
        <About />
        <Skills />
    </div>
}
