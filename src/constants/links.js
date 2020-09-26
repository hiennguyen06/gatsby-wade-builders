import React from 'react'
import { Link } from 'gatsby'

const data = [
    {
        id: 1,
        text: "About",
        url: "/about/"
    },
    {
        id: 2,
        text: "Work",
        url: "/work/"
    },
    {
        id: 3,
        text: "Contact",
        url: "/contact/"
    }
]

// styleClass is a prop that we will pass to the navbar to additional style
const NavLinks = ( {styleClass} ) => {
    return (
        <ul className={`page-links ${styleClass ? styleClass : ''}`}>
            {data.map((link) => {
                return (
                    <li key={link.id}>
                        <Link to={link.url}>
                            {link.text}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavLinks