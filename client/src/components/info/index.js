import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import monitor from './monitor.png'
import AboutList from '../about-list'


const Info = () => {

    const isDesktop = useMediaQuery({minWidth: 1400})
    const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 1399 })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 480})

    return (
        <div>
            {isDesktop &&
                <Div900>
                    <Img1400 src={monitor} />
                    <DivText900 style={{ color: 'white' }}>
                        <Hello> Hello! My name is Tatyana Beneva. </Hello>
                        <Ul900>
                            <AboutList
                                title={'Before'}
                                titleColor={'#00cf4b'}
                                href="before"
                                beggining={"I have bachelore degree in Finance, but I felt that this wasn't something I wanted to ..."}
                            />
                            <AboutList
                                title={'After'}
                                titleColor={'#0088ff'}
                                href="after"
                                beggining={"Of course I started with Html and CSS. Then came the turn of JavaScript and with that I ..."}
                            />
                            <AboutList
                                title={'Now'}
                                titleColor={'#ff0040'}
                                href="now"
                                beggining={"My experience includes following technologies: HTML, CSS, SASS, JS, Node JS, React, ..."}
                            />
                        </Ul900>
                    </DivText900>
                </Div900>
            }
            {isLaptop &&
                <Div900>
                    <Img900 src={monitor} />
                    <DivText900 style={{ color: 'white' }}>
                        <Hello> Hello! My name is Tatyana Beneva. </Hello>
                        <Ul900>
                            <AboutList
                                title={'Before'}
                                titleColor={'#00cf4b'}
                                href="before"
                                beggining={"I have bachelore degree in Finance, but I felt that this wasn't something I wanted to ..."}
                            />
                            <AboutList
                                title={'After'}
                                titleColor={'#0088ff'}
                                href="after"
                                beggining={"Of course I started with Html and CSS. Then came the turn of JavaScript and with that I ..."}
                            />
                            <AboutList
                                title={'Now'}
                                titleColor={'#ff0040'}
                                href="now"
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
                        <Ul900>
                            <AboutList
                                title={'Before'}
                                titleColor={'#00cf4b'}
                                href="before"
                                beggining={"I have bachelore degree in Finance, but I felt that this wasn't something I wanted to ..."}
                            />
                            <AboutList
                                title={'After'}
                                titleColor={'#0088ff'}
                                href="after"
                                beggining={"Of course I started with Html and CSS. Then came the turn of JavaScript and with that I ..."}
                            />
                            <AboutList
                                title={'Now'}
                                titleColor={'#ff0040'}
                                href="now"
                                beggining={"My experience includes following technologies: HTML, CSS, SASS, JS, Node JS, React, ..."}
                            />
                        </Ul900>
                    </DivTextTablet>
                </Div900>
            }
            {isPhone &&
                <Div900>
                    <ImgPhone src={monitor} />
                    <DivTextTablet style={{ color: 'white' }}>
                        <HelloPhone> Hello! My name is Tatyana Beneva. </HelloPhone>
                        <UlPhone>
                            <AboutList
                                title={'Before'}
                                titleColor={'#00cf4b'}
                                href="before"
                                beggining={"I have bachelore degree in Finance, but I felt that this wasn't something I wanted to ..."}
                            />
                            <AboutList
                                title={'After'}
                                titleColor={'#0088ff'}
                                href="after"
                                beggining={"Of course I started with Html and CSS. Then came the turn of JavaScript and with that I ..."}
                            />
                            <AboutList
                                title={'Now'}
                                titleColor={'#ff0040'}
                                href="now"
                                beggining={"My experience includes following technologies: HTML, CSS, SASS, JS, Node JS, React, ..."}
                            />
                        </UlPhone>
                    </DivTextTablet>
                </Div900>
            }
        </div>
    )
}
const UlPhone = styled.div`
    display: grid;
    grid-template-columns: 27% 27% 27%;
    column-gap: 5%;
    padding: 0;
    margin: 3% 4%;
    width: 100%;
`

const Ul900 = styled.div`
    display: grid;
    grid-template-columns: 32% 32% 32%;
    column-gap: 2%;
    padding: 0;
    width: 100%;
`
const DivTextTablet = styled.div`
    width: 80%;
    text-align: center;
    padding: 5% 10%;
`

const DivText900 = styled.div`
    width: 90%;
    text-align: center;
    padding: 5%;
`
const ImgPhone = styled.img`
    position: absolute;
    width: 90%;
    height: 350px;
    margin-left: 5%;
`
const ImgTablet = styled.img`
    position: absolute;
    width: 90%;
    height: 450px;
    margin-left: 5%;
`
const Img900 = styled.img`
    position: absolute;
    width: 60%;
    height: 523px;
`
const Img1400 = styled.img`
    position: absolute;
    width: 60%;
    height: 700px;
`
const HelloPhone = styled.p`
    font-size: 2.3vw;
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