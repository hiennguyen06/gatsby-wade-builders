import React from 'react'
import NavLinks from '../constants/links'

const Navbar = ( {styleClass} ) => {
    return (
        <h1>
            <NavLinks styleClass="styleClassNav" />
        </h1>
    )
}


export default Navbar