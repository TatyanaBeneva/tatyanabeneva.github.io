import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import './index.module.css'
import NavBar from '../../components/nav-bar'
import TextBox from '../../components/text-box-intro-page'
import Skills from '../../components/skills-intro-page'
import Footer from '../../components/footer'

const IntroPage = () => {
    const isLaptop = useMediaQuery({ minWidth: 900 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 899 })
    const isBigPhone = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    return (
        <div>
            {isLaptop &&
                <DivImage900 style={{ backgroundColor: 'black' }}>
                    <NavBar />
                    <Div900>
                        <TextBox />
                        <Skills />
                    </Div900>
                    <Footer />
                </DivImage900>
            }
            {isTablet &&
                <DivImage768 style={{ backgroundColor: 'black' }}>
                    <NavBar />
                    <Div>
                        <TextBox />
                        <Skills />
                    </Div>
                    <Footer />
                </DivImage768>
            }
            {isBigPhone &&
                <DivImage768 style={{ backgroundColor: 'black' }}>
                    <NavBar />
                    <Div481>
                        <TextBox />
                        <Skills />
                    </Div481>
                    <Footer />
                </DivImage768>
            }
            {isPhone &&
                <DivImage768 style={{ backgroundColor: 'black' }}>
                    <NavBar />
                    <Div481>
                        <TextBox />
                        <Skills />
                    </Div481>
                    <Footer />
                </DivImage768>
            }
        </div>
    )
}

const Div481 =styled.div`
    margin-top: 30px 20px;
`

const Div = styled.div`
    margin: 30px 100px;
`

const Div900 = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`
const DivImage768 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1150px;
    width: 100%;
    padding: 0;
`

const DivImage900 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding: 0;
`


export default IntroPage