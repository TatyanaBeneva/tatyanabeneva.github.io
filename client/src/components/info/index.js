import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import monitor from './monitor.png'
import AboutList from '../about-list'

const Info = () => {

    const isLaptop = useMediaQuery({ minWidth: 900 })
    const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 899 })
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
                                beggining={"I have bachelore degree in Finance, but I felt that this wasn't something I wanted..."}
                                description={"I have bachelore degree in Finance, but I felt that this wasn't something I wanted to do all my life and soon after I graduated I started learning programming, because I remembered how much I liked and was inspired by the school hours when we studied just basic html. So my journey into the world of programming began!"}
                            />
                            <AboutList
                                title={'After'}
                                titleColor={'#0088ff'}
                                beggining={"Of course I started with Html and CSS. Then came the turn of JavaScript and with that I..."}
                                description={"Of course I started with Html and CSS. Then came the turn of JavaScript and with that I had to choose which framework to work with. So i did a little research of my own and chose React as a start."}
                            />
                            <AboutList
                                title={'Now'}
                                titleColor={'#ff0040'}
                                beggining={"My experience includes following technologies: HTML, CSS, SASS, JS, Node JS, React, ..."}
                                description={"My experience includes following technologies: HTML, CSS, SASS, JS, Node JS, React, Express JS, Mongo DB, Firebase, GitHub, REST, C#, Unit testing. At the moment I do not have much experience, but I have a great passion and desire to learn and grow."}
                            />
                        </Ul900>
                    </DivText900>
                </Div900>
            }
        </div>
    )
}

const Ul900 = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    column-gap: 2%;
    padding: 0;
    margin: 30px 4%;
    width: 100%;
`

const DivText900 = styled.div`
    position: absolute;
    margin: 25px;
    width: 55%;
    text-align: center;
`

const Img900 = styled.img`
    position: absolute;
    width: 60%;
    height: 80%;
`
const Hello = styled.p`
    font-size: 20px;
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