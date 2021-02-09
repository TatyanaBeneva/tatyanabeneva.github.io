import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const List = ({ title, description, technologies, image, link }) => {
    const isDekstop = useMediaQuery({ minWidth: 1600 })
    const isLaptop = useMediaQuery({ minWidth: 900, maxWidth: 1599 })
    const isTablet = useMediaQuery({ maxWidth: 899 })

    return (
        <span>
            {isDekstop &&
                <LiLaptop>
                    <A href={link}>
                        <Img src={image} />
                        <h2>{title}</h2>
                        <P1600>{description}</P1600>
                        <P1600>{technologies}</P1600>
                    </A>
                </LiLaptop>
            }
            {isLaptop &&
                <LiLaptop>
                    <A href={link}>
                        <Img src={image} />
                        <h3>{title}</h3>
                        <P>{description}</P>
                        <P>{technologies}</P>
                    </A>
                </LiLaptop>
            }
            {isTablet &&
                <LiTablet>
                    <A href={link}>
                        <Img src={image} />
                        <h3>{title}</h3>
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

const P = styled.p`
    margin: 15px;
`
const P1600 = styled.p`
    margin: 15px;
    font-size: 22px;
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