import React, {} from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll"

const AboutList = ({ title, titleColor, beggining, scroll }) => {

    return (
        <Li style={{ border: `5px solid ${titleColor}` }}>
            <h1 style={{ color: titleColor, margin: '10px' }}>
                {title}
            </h1>
            <P>{beggining}</P>
            <Button style={{ backgroundColor: titleColor }}>
                <Link  
                    activeClass="active"
                    to={scroll}
                    spy={true}
                    smooth={true}
                >
                    Click here to view more                        
                </Link>
            </Button>
        </Li>
    )
}

const Button = styled.button`
    margin-top: 30px;
    font-size: 1.2vw;
    padding: 10px;
    border-radius: 25px;
    color: white;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #41f2b6;
        color: white;
        border: white;
        cursor: pointer;
    }
`

const P = styled.p`
    margin: 15px;
    color: black;
    font-size: 1.4vw;
`

const Li = styled.div`
    width: 100%;
    height: 304px;
    border-radius: 10px;
    background-color: lightgray;
`

export default AboutList