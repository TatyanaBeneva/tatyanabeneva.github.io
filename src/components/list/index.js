import React from 'react'
import styled from 'styled-components'

const List = ({ title, description, technologies, image, link }) => {
    return (
        <Li>
            <A href={link}>
                <Img src={image} />
                <H3>{title}</H3>
                <P>{description}</P>
                <P>{technologies}</P>
            </A>
        </Li>
    )
}

const A = styled.a`
    color: white;
    text-decoration: none;
`

const Img = styled.img`
    width: 90%;
    height: 200px;
    display: block;
    margin: 10px auto 0 auto;
`

const H3 = styled.h3`
    
`

const P = styled.p`
    margin: 15px;
`

const Li = styled.li`
    display: inline-block;
    background-color:  #34495e;
    border-radius: 20px;
    height: 100%;
    padding: 5% 0;

    &:hover {
        margin-bottom: 20px;
        margin-top: -20px;
    }
`

export default List