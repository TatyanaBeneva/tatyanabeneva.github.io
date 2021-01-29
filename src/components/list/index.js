import React from 'react'
import styled from 'styled-components'

const List = ({ title, description, technologies, image }) => {
    return (
        <Li>
            <Img src={image} />
            <H3>{title}</H3>
            <P>{description}</P>
            <P>{technologies}</P>
        </Li>
    )
}
const Img = styled.img`
    width: 100%;
    height: 200px;
    display: block;
`

const H3 = styled.h3`
    
`

const P = styled.p`
    margin: 15px;
`

const Li = styled.li`
    border: 1px black;
`

export default List