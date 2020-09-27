import React from 'react'

const Heading = ({heading}) => {
    return <h1 className="heading">
        {heading || 'default Headings'}
    </h1>
} 

export default Heading