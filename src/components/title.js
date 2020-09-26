import React from 'react'

const Title = ({title}) => {
    return <h3 className="section-title">
        {title || 'default title'}
    </h3>
} 

export default Title