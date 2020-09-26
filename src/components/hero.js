import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Title from './title'
import { Link } from 'gatsby'

const query = graphql`
  {
    allStrapiHero {
      nodes {
        id
        title
        description
        image {
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

const Hero = ({title}) => {
    const data = useStaticQuery(query);
    const {allStrapiHero: {nodes: hero}} = data

    return <>
        {hero.map((item) => {
            return (
                <section key={item.id} className="section section-hero">
                    <div className="hero-text">
                        <h1>{item.title}</h1>
                        <p className="text">{item.description}</p>
                    </div>
                    <Image fluid={item.image.childImageSharp.fluid} className="hero-img" />
                    <div className="hero-sub">
                        <Title title="Our unmatched approach" /> 
                        <p className="text">
                            For us the relationship with our clients is one of the key foundations when it comes to building a quality home. An informed client is a happy client and given this we strive to keep our clients well informed from the design stage, through to the contracts and finally the construction process.
                        </p>
                        <Link to="/about/" className="btn">Learn more</Link>
                    </div>
                </section>
            )
        })}
    </>
}

export default Hero