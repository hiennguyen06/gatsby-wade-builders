import React, { useState } from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Image from "gatsby-image"
import Modal from '../components/modal'


const WorkPages = ({data}) => {
  const {title, home_image, suburb, state} = data.design

  const [selectedImg, setSelectedImg] = useState(null)


    return <Layout>
        <section className="section">
          <div className="template-section"> 
            <div className="template-title">
              <h3>{title}</h3>
              <p className="text">{suburb}, {state}</p>
            </div>
            <div className="template-image-container">
              
              {home_image.map((home) => {
                return (
                    <div key={home.id} className="image-div" onClick={() => setSelectedImg(home.home_image.childImageSharp.fluid) }>
                      <Image fluid={home.home_image.childImageSharp.fluid} />
                    </div>
                )
              })}
            </div>
          </div>

        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </section>
    </Layout>
}

export const query = graphql`
  query GetSingleDesign($slug: String) {
    design: strapiDesigns(slug: { eq: $slug }) {
      title
      suburb
      state
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
    }
  }
`
export default WorkPages