import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { Link, animateScroll as scroll } from "react-scroll"

const AboutList = ({ title, titleColor, beggining, scroll }) => {
    const isLaptop = useMediaQuery({ minWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 767 })

    return (
        <span>
            {isLaptop &&
                <LiLaptop style={{ border: `5px solid ${titleColor}` }}>
                    <h1 style={{ color: titleColor, margin: '10px' }}>
                        {title}
                    </h1>
                    <PLaptop>{beggining}</PLaptop>
                    <Button style={{ backgroundColor: titleColor }}>
                        <Link
                            activeClass="active"
                            to={scroll}
                            spy={true}
                            smooth={true}
                        >
                            View more...
                        </Link>
                    </Button>
                </LiLaptop>
            }
            {isTablet &&
                <LiTablet style={{ border: `5px solid ${titleColor}` }}>
                    <h1 style={{ color: titleColor, margin: '10px' }}>
                        {title}
                    </h1>
                    <PTablet>{beggining}</PTablet>
                    <Button style={{ backgroundColor: titleColor}}>
                        <Link
                            activeClass="active"
                            to={scroll}
                            spy={true}
                            smooth={true}
                        >
                            View more...
                        </Link>
                    </Button>
                </LiTablet>
            }
        </span>
    )
}

const Button = styled.button`
    margin-top: 10%;
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
const PTablet = styled.p`
    margin: 15px;
    color: black;
    font-size: 2vw;
`

const PLaptop = styled.p`
    margin: 15px;
    color: black;
    font-size: 1.4vw;
`
const LiTablet = styled.div`
    width: 100%;
    height: 230px;
    border-radius: 10px;
    background-color: lightgray;
`

const LiLaptop = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 10px;
    background-color: lightgray;
`

export default AboutList