import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import monitor from './monitor.png'
import AboutList from '../about-list'


const Info = () => {

    const isLaptop = useMediaQuery({ minWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 479 })

    return (
        <div>
            {isLaptop &&
                <Div900>
                    <Img900 src={monitor} />
                    <DivText900 style={{ color: 'white' }}>
                        <Hello> Hello! My name is Tatyana Beneva. </Hello>
                        <Ul900>
                            <AboutList
                                title={'Before'}
                                titleColor={'#00cf4b'}
                                scroll="before"
                                beggining={"I have bachelore degree in Finance, but I felt that this wasn't something I wanted to ..."}
                            />
                            <AboutList
                                title={'After'}
                                titleColor={'#0088ff'}
                                scroll="after"
                                beggining={"Of course I started with Html and CSS. Then came the turn of JavaScript and with that I ..."}
                            />
                            <AboutList
                                title={'Now'}
                                titleColor={'#ff0040'}
                                scroll="now"
                                beggining={"My experience includes following technologies: HTML, CSS, SASS, JS, Node JS, React, ..."}
                            />
                        </Ul900>
                    </DivText900>
                </Div900>
            }
            {isTablet &&
                <Div900>
                    <ImgTablet src={monitor} />
                    <DivTextTablet style={{ color: 'white' }}>
                        <Hello> Hello! My name is Tatyana Beneva. </Hello>
                        <UlTablet>
                            <AboutList
                                title={'Before'}
                                titleColor={'#00cf4b'}
                                scroll="before"
                                beggining={"I have bachelore degree in Finance, but I felt that this wasn't something I wanted to ..."}
                            />
                            <AboutList
                                title={'After'}
                                titleColor={'#0088ff'}
                                scroll="after"
                                beggining={"Of course I started with Html and CSS. Then came the turn of JavaScript and with that I ..."}
                            />
                            <AboutList
                                title={'Now'}
                                titleColor={'#ff0040'}
                                scroll="now"
                                beggining={"My experience includes following technologies: HTML, CSS, SASS, JS, Node JS, React, ..."}
                            />
                        </UlTablet>
                    </DivTextTablet>
                </Div900>
            }
        </div>
    )
}

const UlTablet = styled.div`
    display: grid;
    grid-template-columns: 29% 29% 29%;
    column-gap: 3%;
    padding: 0;
    margin: 3% 5%;
    width: 100%;
`

const Ul900 = styled.div`
    display: grid;
    grid-template-columns: 29% 29% 29%;
    column-gap: 3%;
    padding: 0;
    margin: 30px 2%;
    width: 100%;
`
const DivTextTablet = styled.div`
    position: absolute;
    margin: 25px;
    width: 85%;
    text-align: center;
`

const DivText900 = styled.div`
    position: absolute;
    margin: 25px;
    width: 55%;
    text-align: center;
`
const ImgTablet = styled.img`
    position: absolute;
    width: 90%;
    height: 400px;
    margin-left: 5%;
`
const Img900 = styled.img`
    position: absolute;
    width: 60%;
    height: 523px;
`
const Hello = styled.p`
    font-size: 1.8vw;
    color: #ffac28;
    white-space: nowrap;
    margin: 15px auto;
    overflow: hidden;
    animation: typing 8s steps(60, end);

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }
`

const Div900 = styled.div`
    font-style: italic;
    margin-top: 2%;
    font-family: Jack, serif;
`

export default Info