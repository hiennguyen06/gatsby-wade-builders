import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Heading from '../components/heading'
import Title from '../components/title'
import Contact from '../components/contact'

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        id
        description_1
        description_2
        description_3
        header_text
        image_2 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image_3 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image_4 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const About = ({data: {allStrapiAbout: {nodes: about}}}) => {

  const { header_text, description_1, description_2, description_3, main_image, image_2, image_3, image_4 } = about[0];

  console.log(main_image)
  return <Layout>
    <section>
        <div className="section section-work-page">
            <Heading heading="A quality build and a quality relationship " />
            <p className="text work-desc">{header_text}</p>
        </div>
        <Image fluid={main_image.childImageSharp.fluid} />
        <section className="section">
          <div className="section-about">

            <div className="about-section-container">
              <div className="about-info">
                <Title className="about-title" title="We are with you at every step of the way" />
                <p className="text">{description_1}</p>
              </div>
              <Image fluid={image_2.childImageSharp.fluid} />
            </div>
            <div className="about-section-container heavy-lifting">
              <Image fluid={image_3.childImageSharp.fluid} />
              <div className="about-info">
                <Title className="about-title" title="Let us do the heavy lifting" />
                <p className="text">{description_2}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section profile">
          <div className="section-profile">
              <div className="profile-info">
                <Image fluid={image_4.childImageSharp.fluid} />
                <div>
                  <h3>Steven Wade</h3>
                  <p className="text director">Director</p>
                  <p className="text">{description_3}</p>
                </div>
              </div>
          </div>
        </section>
    </section>
    <Contact />
  </Layout>
}

export default About
