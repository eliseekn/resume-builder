import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"

export default function App() {
    return <>
        <div className="relative">
            <Header />

            <div className="flex">
                <Sidebar />
                <Main />
            </div>
        </div>
    </>
}
