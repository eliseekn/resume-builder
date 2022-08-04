import React from "react"

export default function Sidebar() {
    return <div className="basis-1/3 border-r-2 p-5 h-screen sticky top-0">
        <h2 className="font-medium text-xl">General information</h2>

        <div className="mt-5">
            <label htmlFor="full-name">Full Name</label>
            <input type="text" className="rounded-lg w-full" id="full-name" placeholder="Elisée Kouadio N'Guessan" />
        </div>

        <div className="mt-5">
            <label htmlFor="email">Email Adress</label>
            <input type="email" className="rounded-lg w-full" id="email" placeholder="eliseekn@gmail.com" />
        </div>

        <div className="mt-5">
            <label htmlFor="phone-number">Phone Number</label>
            <input type="text" className="rounded-lg w-full" id="phone-number" placeholder="(+225) 0759434291" />
        </div>

        <div className="mt-5">
            <label htmlFor="portfolio">Portfolio</label>
            <input type="url" className="rounded-lg w-full" id="portfolio" placeholder="https://eliseekn.netlify.com" />
        </div>
    </div>
}
