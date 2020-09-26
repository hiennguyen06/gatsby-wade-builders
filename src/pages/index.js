import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Image from "../components/image"

import '../constants/links'

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Hero />
  </Layout>
)

export default IndexPage
