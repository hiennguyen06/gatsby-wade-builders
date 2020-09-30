import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Image from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const query = graphql`
  {
    file(relativePath: {eq: "contact-image.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`

const Contact = () => {

  const data = useStaticQuery(query);
  const {file:{childImageSharp:{fluid}}} = data

  return <Layout>
    <section className="section">
        <div className="section-contact contact-page">
            <div>
                <h1 className="contact-heading">Looking to build your next<br></br>dream home with us?</h1>
            </div>
            <div className="contact-page-container">
              <div className="contact-info">
                <h4 className="section-title">Address</h4>
                <p className="text">2 McPherson Place</p>
                <p className="text">Werribee, VIC 3030</p>
              </div>
              <div className="contact-info">
                <h4 className="section-title">Contact</h4>
                <p className="text">03 9741 8288</p>
                <p className="text">stevew@wadebuilders.com.au</p>
              </div>
            </div>
        </div>
    </section>
    <div>
        <Image fluid={fluid} />
    </div>
  </Layout>
}

export default Contact
