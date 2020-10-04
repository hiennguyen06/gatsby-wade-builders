import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Designs from "../components/designs"
import Heading from '../components/heading'
import Contact from '../components/contact'


const Work = ({data: {allStrapiDesigns: {nodes: designs}}}, {title}) => {

  return <Layout>
    <section>
      <div className="section section-work-page">
        <Heading heading="Our work"/>
        <p className="text work-desc">From the design process right through to us handing over the keys to your new home we will work with you through every step of the process to make sure you are well informed and enjoy the process of building your new home.</p>
      </div>
      <Designs designs={designs} className="work-background-change" />
    </section>
    <Contact />
  </Layout>
}

export default Work

export const query = graphql`
  {
    allStrapiDesigns {
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