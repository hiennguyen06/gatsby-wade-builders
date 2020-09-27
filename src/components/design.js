import React from 'react'
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Image from "gatsby-image"


const Design = ({design}) => {
    return <Link to={`/work/${design.slug}`}>
            <div key={design.id} className="design-item">
                <Image fluid={design.image.childImageSharp.fluid}  />
                <div className="design-info">
                    <h3>{design.title}</h3>
                    <p className="text">{design.suburb}, {design.state}</p>
                    <div className="item-tags">
                        {design.type.map((item) => {
                            return (
                                <p className="tag" key={item.id}>{item.name}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
    </Link>
    
    
}


export default Design
