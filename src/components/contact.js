import React from 'react'
import { Link } from "gatsby"
import { BsArrowRight } from 'react-icons/fa';




const Contact = () => {
    return <section className="section">
        <div className="section-contact">
            <div>
                <h1 className="contact-heading">Looking to build your next<br></br>dream home with us?</h1>
                <Link to="/contact/" className="btn">Get in touch</Link>
            </div>
        </div>
    </section>
}

export default Contact