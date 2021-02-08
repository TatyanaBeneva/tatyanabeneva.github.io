import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const List = ({ title, description, technologies, image, link }) => {

    const isLaptop = useMediaQuery({ minWidth: 900 })
    const isTablet = useMediaQuery({ maxWidth: 899 })

    return (
        <span>
            {isLaptop &&
                <LiLaptop>
                    <A href={link}>
                        <Img src={image} />
                        <H3>{title}</H3>
                        <P>{description}</P>
                        <P>{technologies}</P>
                    </A>
                </LiLaptop>
            }
            {isTablet &&
                <LiTablet>
                    <A href={link}>
                        <Img src={image} />
                        <H3>{title}</H3>
                        <P>{description}</P>
                        <P>{technologies}</P>
                    </A>
                </LiTablet>
            }
        </span>
    )
}

const LiTablet = styled.li`
    display: inline-block;
    background-color:  #34495e;
    border-radius: 20px;
    height: 100%;
    margin-bottom: 30px;

    &:hover {
        margin-bottom: 20px;
        margin-top: -20px;
    }
`

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

const LiLaptop = styled.li`
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