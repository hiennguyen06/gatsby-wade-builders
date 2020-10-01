import React from 'react'
import { Link } from 'gatsby'

const data = [
    {
        id: 1,
        title: "Facebook",
        url: '/'
    },
    {
        id: 2,
        title: "Instagram",
        url: '/'
    },
    {
        id: 3,
        title: "Houz",
        url: '/'
    }
]

const SocialLinks = ({socialClass}) => {
    return (
        <ul className={`social-links ${socialClass ? socialClass : ''}`}>
            {data.map((item) => {
                return (
                <li key={item.id}>
                    <Link to={item.url}>{item.title}</Link>
                </li>
                )
            })}
        </ul>
    )
}

export default SocialLinks