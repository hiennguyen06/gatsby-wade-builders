import React from 'react'
import NavLinks from '../constants/links'
import { Link } from 'gatsby'
import { FaTimes } from "react-icons/fa"

const Sidebar = ({styleClass, openSidebar, handleToggle}) => {
    return <div className={`sidebar ${openSidebar ? 'show-sidebar' : ''}`}>
        <button className="close-btn" onClick={handleToggle}>
            <FaTimes  />
        </button>
        <NavLinks styleClass="sidebar-links" />
    </div>
}

export default Sidebar