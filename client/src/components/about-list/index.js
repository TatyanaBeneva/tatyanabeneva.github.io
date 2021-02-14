import React from 'react'
import styled from 'styled-components'

const AboutList = ({title, titleColor, description, beggining}) => {
    return(
        <Li style={{border: `5px solid ${titleColor}`}}>
            <h1 style={{color: titleColor, margin: '10px'}}>
                {title}
            </h1>
            <P>{beggining}</P>
        </Li>
    )
}

const P = styled.p`
    margin: 15px;
    color: black;
    font-size: 1.25em;
`

const Li = styled.div`
    width: 100%;
    height: 304px;
    border-radius: 10px;
    background-color: lightgray;
`

export default AboutList