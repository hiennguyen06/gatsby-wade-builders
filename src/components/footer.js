import React from 'react'
import NavLinks from '../constants/links'
import SocialLinks from '../constants/social-links'

const Footer = ( ) => {
    return <>
        <section className="section top-footer">
            <div className="footer-center">
                <div className="footer-info">
                    <h4>WADE</h4>
                    <NavLinks styleClass="footer-links" />
                </div>
                <div>
                    <div className="footer-info">
                        <h4>Address</h4>
                        <p>2 McPherson Place</p>
                        <p>Werribee, VIC 3030</p>
                    </div>
                    <div className="footer-info">
                        <h4>Contact</h4>
                        <p>03 9741 8288</p>
                        <p>stevew@wadebuilders.com.au</p>
                    </div>
                </div>
            </div>
        </section>  
        <section className="section bottom-footer">
            <div className="footer-center">
                <h4>&copy; 2020 WADE</h4>
                <div className="social-links-container">
                    <SocialLinks />
                </div>
            </div>
        </section>
    </>
}

export default Footer;