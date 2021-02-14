import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import NavBar from '../../components/nav-bar'
import Info from '../../components/info'
import Footer from '../../components/footer'
import flower from './flower.png'
import flower2 from './flower2.png'

const AboutPage = () => {

    const isLaptop = useMediaQuery({ minWidth: 900 })

    return (
        <div>
            {isLaptop &&
                <div>
                    <DivBackground900>
                        <NavBar />
                        <DivGrid900>
                            <DivImage900>
                                <Flower src={flower} />
                            </DivImage900>
                            <Info />
                            <DivImage900>
                                <Flower src={flower2} />
                            </DivImage900>
                        </DivGrid900>
                        <Footer />
                    </DivBackground900>
                </div>
            }
        </div>
    )
}

const Flower = styled.img`
    margin-top: 30%;
    width: 100%;
    height: 300px;
`

const DivImage900 = styled.div`
    width: 100%;
`

const DivBackground900 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding: 0;
    background-color: black;
`

const DivGrid900 = styled.div`
    display: grid;
    grid-template-columns: 20% 60% 20%;
`
export default AboutPage