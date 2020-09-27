import { doc } from 'prettier'
import React, { useState } from 'react'
import { FaAlignRight } from "react-icons/fa"
import NavLinks from '../constants/links'
import { Link } from "gatsby"

const Navbar = ( {styleClass} ) => {

    const [navbar, setNavbar] = useState(false)
 
    const changeNavbar = (e) => {
        if (window.scrollY >= 40) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar)

    return (
        <nav className={navbar ? 'navbar navbar-active' : 'navbar'}>
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/">
                        <h1 className="logo">Wade<span>&trade;</span></h1>
                    </Link>
                    <button type="button" className="toggle-btn">
                        <FaAlignRight className={navbar ? 'toggle-btn-light' : 'toggle-btn'}></FaAlignRight>
                    </button>
                </div>
                <div className="nav-right">
                    <NavLinks styleClass="nav-links" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar