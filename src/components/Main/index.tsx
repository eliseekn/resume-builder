import React from "react"
import Header from "./Section/Header"
import Experience from "./Section/Experience"
import Education from "./Section/Education"
import Page from "./Page"
import Separator from "./Section/Separator";

export default function Main() {
    return <div className="basis-full bg-gray-400 py-5 overflow-y-scroll">
        <Page>
            <Header />
            <Separator />
            <Experience />
            <Separator />
            <Education />
        </Page>

        <Page></Page>
    </div>
}
