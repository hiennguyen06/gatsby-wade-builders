import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Navbar from '../components/navbar'
import Image from "../components/image"

import '../constants/links'

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Projects />
  </Layout>
)

export default IndexPage
