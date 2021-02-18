import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import NavBar from '../../components/nav-bar'
import Info from '../../components/info'
import AllInfo from '../../components/all-about-info'
import Footer from '../../components/footer'

const AboutPage = () => {
    const isDesktop = useMediaQuery({minWidth: 1400})
    const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 1399 })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    return (
        <div>
            {isDesktop &&
                <div>
                    <NavBar />
                    <DivGrid1400>
                        <div></div>
                        <Info />
                        <div></div>
                    </DivGrid1400>
                    <AllInfo />
                    <Footer />
                </div>
            }
            {isLaptop &&
                <div>
                    <NavBar />
                    <DivGrid900>
                        <div></div>
                        <Info />
                        <div></div>
                    </DivGrid900>
                    <AllInfo />
                    <Footer />
                </div>
            }
            {isTablet &&
                <div>
                    <NavBar />
                    <DivMonitor>
                        <Info />
                    </DivMonitor>
                    <AllInfo />
                    <Footer />
                </div>
            }
            {isPhone &&
                <div>
                    <NavBar />
                    <DivMonitorPhone>
                        <Info />
                    </DivMonitorPhone>
                    <AllInfo />
                    <Footer />
                </div>
            }
        </div>
    )
}

const DivMonitorPhone = styled.div`
    width: 100%;
    height: 350px;
`

const DivMonitor = styled.div`
    width: 100%;
    height: 450px;
`

const DivGrid900 = styled.div`
    display: grid;
    grid-template-columns: 20% 60% 20%;
    height: 600px;
`
const DivGrid1400 = styled.div`
    display: grid;
    grid-template-columns: 20% 60% 20%;
    height: 800px;
`
export default AboutPage