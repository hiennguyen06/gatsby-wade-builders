import React from 'react'
import Image from "gatsby-image"
import { motion } from 'framer-motion'


const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null)
        }
    }
    return (
        <motion.div 
            className="backdrop" 
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Image 
                fluid={selectedImg} 
                className="modal-image" 
            />
        </motion.div>
    )
}

export default Modal