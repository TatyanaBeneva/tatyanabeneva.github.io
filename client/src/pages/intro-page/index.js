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
                <div>
                    <NavBar />
                    <Div900>
                        <TextBox />
                        <Skills />
                    </Div900>
                    <Footer />
                </div>
            }
            {isTablet &&
                <div>
                    <NavBar />
                    <Div>
                        <TextBox />
                        <Skills />
                    </Div>
                    <Footer />
                </div>
            }
            {isBigPhone &&
                <div>
                    <NavBar />
                    <Div481>
                        <TextBox />
                        <Skills />
                    </Div481>
                    <Footer />
                </div>
            }
            {isPhone &&
                <div>
                    <NavBar />
                    <Div481>
                        <TextBox />
                        <Skills />
                    </Div481>
                    <Footer />
                </div>
            }
        </div>
    )
}

const Div481 = styled.div`
    margin: 30px 20px 500px 20px;
`

const Div = styled.div`
    margin: 30px 100px;
`

const Div900 = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`

export default IntroPage