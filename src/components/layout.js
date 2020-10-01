/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"
import Sidebar from "./sidebar"

const Layout = ({ children }) => {

  const [openSidebar, setOpensidebar] = useState(false)

  const handleToggle = () => {
    setOpensidebar(!openSidebar);
  }


  return (
    <>
      <Navbar handleToggle={handleToggle} />
      <Sidebar openSidebar={openSidebar} handleToggle={handleToggle} />
      {children}
      <Footer />
    </>
  )
}
export default Layout
