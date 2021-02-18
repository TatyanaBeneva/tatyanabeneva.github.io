import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { Link} from "react-scroll"

const AboutList = ({ title, titleColor, beggining, href }) => {
    const isLaptop = useMediaQuery({ minWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    return (
        <span>
            {isLaptop &&
                <LiLaptop>
                    <h1 style={{ color: titleColor, margin: '10px' }}>
                        {title}
                    </h1>
                    <PLaptop>{beggining}</PLaptop>
                    <Link
                        activeClass="active"
                        to={href}
                        spy={true}
                        smooth={true}
                    >
                        <Button style={{ backgroundColor: titleColor }}>
                            View more...
                        </Button>
                    </Link>
                </LiLaptop>
            }
            {isTablet &&
                <LiTablet>
                    <h1 style={{ color: titleColor, margin: '10px' }}>
                        {title}
                    </h1>
                    <PTablet>{beggining}</PTablet>
                    <Link
                        activeClass="active"
                        to={href}
                        spy={true}
                        smooth={true}
                    >
                        <Button style={{ backgroundColor: titleColor }}>
                            View more...
                        </Button>
                    </Link>
                </LiTablet>
            }
            {isPhone &&
                <LiPhone>
                    <h3 style={{ color: titleColor, margin: '10px' }}>
                        {title}
                    </h3>
                    <PPhone>{beggining}</PPhone>
                    <Link
                        activeClass="active"
                        to={href}
                        spy={true}
                        smooth={true}
                    >
                        <Button style={{ backgroundColor: titleColor }}>
                            View more...
                        </Button>
                    </Link>
                </LiPhone>
            }
        </span>
    )
}

const Button = styled.button`
    position: relative;
    margin-top: 10px;
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

const PPhone = styled.p`
    margin: 5%;
    color: black;
    font-size: 2.4vw;
    height: 90px;
`
const PTablet = styled.p`
    margin: 15px;
    color: black;
    font-size: 2vw;
    height: 110px;
`

const PLaptop = styled.p`
    margin: 15px;
    color: black;
    font-size: 1.4vw;
    height: 145px;
`
const LiPhone = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background-color: lightgray;
`
const LiTablet = styled.div`
    width: 100%;
    height: 250px;
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