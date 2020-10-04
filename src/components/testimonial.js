import React, { useState } from 'react'
import Title from '../components/title'
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    allStrapiTestimonials {
      nodes {
        id
        strapiId
        name
        info
        title
      }
    },
    file(relativePath: {eq: "oak-street-3.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`

const Testimonial = () => {
    const data = useStaticQuery(query)
    const {allStrapiTestimonials: {nodes: testimonial}} = data

    // const image = useStaticQuery(query) 
    // const {file:{childImageSharp: { fluid }}} = image


    const [value, setValue] = useState(0)
    const { info } = testimonial[value]
    
    return <>
        <section className="section">
            <div className="testimonial-section">
                <div className="testimonial-section-center">
                    <h3>Clients we've worked with</h3>
                    <div 
                      className="text testimonial-info"
                    >
                        "{info}"
                    </div>
                    <div className="testimonial-btn-container">
                        {testimonial.map((item, index) => {
                            return (
                                <div key={item.strapiId} className="testimonial-btn-info">
                                    <button  
                                        onClick={() => setValue(index)}
                                        className={`testimonial-btn ${index === value ? 'testimonial-btn-active' : ''} `}
                                        >
                                          {item.name}
                                        <p className="testimonial-job-title">{item.title}</p>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
        <Image fluid={data.file.childImageSharp.fluid} className="testimonial-img" />
    
    </>
    
}

export default Testimonial