import React from 'react'
import NavLinks from '../constants/links'
import SocialLinks from '../constants/social-links'
import { Link } from 'gatsby'
import { FaTimes } from "react-icons/fa"

const Sidebar = ({styleClass, socialClass, openSidebar, handleToggle}) => {
    return <div className={`sidebar ${openSidebar ? 'show-sidebar' : ''}`}>
        
        <div className="sidebar-nav">
            <Link to="/">
                <h1 className="logo sidebar-logo">Wade<span>&trade;</span></h1>
             </Link>
            <button className="close-btn" onClick={handleToggle}>
                <FaTimes  />
            </button>
        </div>

        <div className="sidebar-container">
            <NavLinks styleClass="sidebar-links" />
        </div>
    </div>
}

export default Sidebar