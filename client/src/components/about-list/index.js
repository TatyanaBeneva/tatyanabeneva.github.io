import React, {useContext} from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { Link} from "react-scroll"
import LanguageContext from '../../Context'

const AboutList = ({ title, beggining, href }) => {
    const {language, } = useContext(LanguageContext)
    const isDesktop = useMediaQuery({minWidth: 1400})
    const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 1399 })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    return (
        <span>
            {isDesktop &&
                <LiDesktop>
                    <H1>
                        {title}
                    </H1>
                    <PDesktop>{beggining}</PDesktop>
                    <Link
                        activeClass="active"
                        to={href}
                        spy={true}
                        smooth={true}
                    >
                        <Button>
                            {language==='EN' ? "View more..." : "Виж повече..."}
                        </Button>
                    </Link>
                </LiDesktop>
            }
            {isLaptop &&
                <LiLaptop>
                    <H1>
                        {title}
                    </H1>
                    <PLaptop>{beggining}</PLaptop>
                    <Link
                        activeClass="active"
                        to={href}
                        spy={true}
                        smooth={true}
                    >
                        <Button>
                            {language==='EN' ? "View more..." : "Виж повече..."}
                        </Button>
                    </Link>
                </LiLaptop>
            }
            {isTablet &&
                <LiTablet>
                    <H1>
                        {title}
                    </H1>
                    <PTablet>{beggining}</PTablet>
                    <Link
                        activeClass="active"
                        to={href}
                        spy={true}
                        smooth={true}
                    >
                        <Button>
                            {language==='EN' ? "View more..." : "Виж повече..."}
                        </Button>
                    </Link>
                </LiTablet>
            }
            {isPhone &&
                <LiPhone>
                    <h3 style={{ color:'#00b6ff', margin: '10px' }}>
                        {title}
                    </h3>
                    <PPhone>{beggining}</PPhone>
                    <Link
                        activeClass="active"
                        to={href}
                        spy={true}
                        smooth={true}
                    >
                        <Button>
                            {language==='EN' ? "View more..." : "Виж повече..."}
                        </Button>
                    </Link>
                </LiPhone>
            }
        </span>
    )
}

const H1 = styled.h1`
    margin: 10px;
    color: #00b6ff;
`

const Button = styled.button`
    position: relative;
    margin-top: 10px;
    font-size: 1.2vw;
    padding: 10px;
    border-radius: 25px;
    color: white;
    background-color: #00b6ff;

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
const PDesktop = styled.p`
    margin: 15px 15px 80px 15px;
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
const LiDesktop = styled.div`
    width: 100%;
    height: 400px;
    border-radius: 10px;
    background-color: lightgray;
`

export default AboutList