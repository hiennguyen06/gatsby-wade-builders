import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Designs from "../components/designs"
import Testimonial from "../components/testimonial"
import Contact from '../components/contact'
import Image from "gatsby-image"

import '../constants/links'
import '../constants/social-links'

import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const {
    allStrapiDesigns: {nodes: designs}
  } = data

  return (
    <Layout>
      <Hero />
      <Designs designs={designs} />
      <Testimonial />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiDesigns(sort: {fields: id, order: ASC}, limit: 6) {
      nodes {
        id
        suburb
        title
        slug
        state
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        home_image {
          id
          home_image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        type {
          id
          name
        }
      }
    }
  }
`

export default IndexPage
