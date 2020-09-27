import React from 'react'
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Design from './design'


const Designs = ({designs}) => {
    return <section className="section section-designs">

                <div className="design-grid">
                    {designs.map((design) => {
                        return (
                            <Design key={design.id} design={design} /> 
                        )
                    })}
                </div>
                <Link to="/work/" className="btn">Explore all</Link>

    </section>
}

export default Designs