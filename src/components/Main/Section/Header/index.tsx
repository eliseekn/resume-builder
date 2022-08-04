import React from "react"

export default function Header() {
    return <div className="text-center">
        <p className="font-medium">Full Name</p>
        <p className="font-medium text-xl mt-3">Senior Software Developer</p>

        <div className="flex justify-center items-center gap-5 mt-5">
            <p>Abidjan, Côte d'Ivoire</p>
            <p>(+225) 0000000000</p>
        </div>

        <div className="flex justify-center items-center gap-5 mt-2">
            <p>test@email.com</p>
            <p>https://portfolio.com</p>
        </div>

        <p className="mt-5 text-center">
            Sit asperiores debitis sint quo. Ipsam earum consequatur omnis libero blanditiis error natus. Sed delectus natus possimus explicabo nihil praesentium incidunt.
        </p>
    </div>
}
