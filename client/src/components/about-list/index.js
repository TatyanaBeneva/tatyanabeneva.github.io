import React from 'react'
import styled from 'styled-components'

const AboutList = ({title, titleColor, description, desColor}) => {
    return(
        <Li style={{border: `5px solid ${titleColor}`}}>
            <h2 style={{color: titleColor, margin: '10px'}}>
                {title}
            </h2>
            <p style={{color: desColor, margin: '15px'}}>{description}</p>
        </Li>
    )
}

const Li = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: lightgray;
`

export default AboutList