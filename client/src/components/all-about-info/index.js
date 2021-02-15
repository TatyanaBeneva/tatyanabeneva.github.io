import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const AllInfo = () => {
    const isLaptop = useMediaQuery({ minWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({maxWidth: 480})

    const history = useHistory();

    const toWorkPage = (e) => {
        e.preventDefault()
        history.push('/work')
    }

    const toContactPage = (e) => {
        e.preventDefault()
        history.push('/contact')
    }

    return (
        <div>
            {isLaptop &&
                <Div>
                    <ul style={{ padding: 0, fontSize: '1.4vw' }}>
                        <Li style={{ border: `5px solid #00cf4b` }} id="before">
                            <h1 style={{ color: '#00cf4b' }}>Before</h1>
                            <P>
                                I have bachelore degree in Finance, but I felt that this wasn't something I wanted to do
                                all my life and soon after I graduated I started learning programming, because I
                                remembered how much I liked and was inspired by the school hours when we studied just
                                basic html. So my journey into the world of programming started!
                            </P>
                        </Li>
                        <Li style={{ border: `5px solid #0088ff` }} id="after">
                            <h1 style={{ color: '#0088ff' }}>After</h1>
                            <P>
                                Of course I started with Html and CSS. Then came the turn of JavaScript and with that I
                                had to choose which framework to work with. So i did a little research of my own and
                                chose React as a start.
                                Where did I study these technologies? I took the following courses at SoftUni University:
                            </P>
                            <ul style={{ padding: '2.5%' }}>
                                <li>HTML/CSS</li>
                                <li>JavaScript Basics</li>
                                <li>JavaScript Advanced</li>
                                <li>JavaScript Applications</li>
                                <li>JavaScript Back-End</li>
                                <li>React JS</li>
                                <li>C# Fundamentals</li>
                            </ul>
                            <P>
                                During this time I was able to read some good books:
                            </P>
                            <ul style={{ padding: '2.5%' }}>
                                <li>HTML 5 & CSS 3. Practical programming</li>
                                <li>Basics of programming with JavaScript</li>
                                <li>Principles of programming with C#</li>
                                <li>You don’t know JS – series books</li>
                                <li>Many books on self-improvement</li>
                            </ul>
                        </Li>
                        <Li style={{ border: '5px solid #ff0040' }} id="now">
                            <h1 style={{ color: '#ff0040' }}>Now</h1>
                            <P>
                                My experience includes following technologies: HTML, CSS, SASS, JS, Node JS, React,
                                Express JS, Mongo DB, Firebase, GitHub, REST, C#, Unit testing. I'm currently taking
                                courses of graphic design and UI web design. My moto is "never stop learning". At the
                                moment I do not have much experience, but I have a great passion and desire to learn
                                and grow.
                            </P>
                        </Li>
                    </ul>
                    <div style={{ textAlign: 'center' }}>
                        <Button900 onClick={toWorkPage}>View my work</Button900>
                        <Button900 onClick={toContactPage}>Let's talk!</Button900>
                    </div>
                </Div>
            }
            {isTablet &&
                <DivTablet>
                    <ul style={{ padding: 0, fontSize: '2.5vw' }}>
                        <Li style={{ border: `5px solid #00cf4b` }} id="before">
                            <h1 style={{ color: '#00cf4b' }}>Before</h1>
                            <PTablet>
                                I have bachelore degree in Finance, but I felt that this wasn't something I wanted to do
                                all my life and soon after I graduated I started learning programming, because I
                                remembered how much I liked and was inspired by the school hours when we studied just
                                basic html. So my journey into the world of programming started!
                            </PTablet>
                        </Li>
                        <Li style={{ border: `5px solid #0088ff` }} id="after">
                            <h1 style={{ color: '#0088ff' }}>After</h1>
                            <PTablet>
                                Of course I started with Html and CSS. Then came the turn of JavaScript and with that I
                                had to choose which framework to work with. So i did a little research of my own and
                                chose React as a start.
                                Where did I study these technologies? I took the following courses at SoftUni University:
                            </PTablet>
                            <ul style={{ padding: '2.5%' }}>
                                <li>HTML/CSS</li>
                                <li>JavaScript Basics</li>
                                <li>JavaScript Advanced</li>
                                <li>JavaScript Applications</li>
                                <li>JavaScript Back-End</li>
                                <li>React JS</li>
                                <li>C# Fundamentals</li>
                            </ul>
                            <PTablet>
                                During this time I was able to read some good books:
                            </PTablet>
                            <ul style={{ padding: '2.5%' }}>
                                <li>HTML 5 & CSS 3. Practical programming</li>
                                <li>Basics of programming with JavaScript</li>
                                <li>Principles of programming with C#</li>
                                <li>You don’t know JS – series books</li>
                                <li>Many books on self-improvement</li>
                            </ul>
                        </Li>
                        <Li style={{ border: '5px solid #ff0040' }} id="now">
                            <h1 style={{ color: '#ff0040' }}>Now</h1>
                            <PTablet>
                                My experience includes following technologies: HTML, CSS, SASS, JS, Node JS, React,
                                Express JS, Mongo DB, Firebase, GitHub, REST, C#, Unit testing. I'm currently taking
                                courses of graphic design and UI web design. My moto is "never stop learning". At the
                                moment I do not have much experience, but I have a great passion and desire to learn
                                and grow.
                            </PTablet>
                        </Li>
                    </ul>
                    <div style={{ textAlign: 'center' }}>
                        <Button900 onClick={toWorkPage}>View my work</Button900>
                        <Button900 onClick={toContactPage}>Let's talk!</Button900>
                    </div>
                </DivTablet>
            }
            {isPhone &&
                <DivTablet>
                    <ul style={{ padding: 0, fontSize: '2.5vw' }}>
                        <Li style={{ border: `5px solid #00cf4b` }} id="before">
                            <h2 style={{ color: '#00cf4b' }}>Before</h2>
                            <PTablet>
                                I have bachelore degree in Finance, but I felt that this wasn't something I wanted to do
                                all my life and soon after I graduated I started learning programming, because I
                                remembered how much I liked and was inspired by the school hours when we studied just
                                basic html. So my journey into the world of programming started!
                            </PTablet>
                        </Li>
                        <Li style={{ border: `5px solid #0088ff` }} id="after">
                            <h2 style={{ color: '#0088ff' }}>After</h2>
                            <PTablet>
                                Of course I started with Html and CSS. Then came the turn of JavaScript and with that I
                                had to choose which framework to work with. So i did a little research of my own and
                                chose React as a start.
                                Where did I study these technologies? I took the following courses at SoftUni University:
                            </PTablet>
                            <ul style={{ padding: '2.5%' }}>
                                <li>HTML/CSS</li>
                                <li>JavaScript Basics</li>
                                <li>JavaScript Advanced</li>
                                <li>JavaScript Applications</li>
                                <li>JavaScript Back-End</li>
                                <li>React JS</li>
                                <li>C# Fundamentals</li>
                            </ul>
                            <PTablet>
                                During this time I was able to read some good books:
                            </PTablet>
                            <ul style={{ padding: '2.5%' }}>
                                <li>HTML 5 & CSS 3. Practical programming</li>
                                <li>Basics of programming with JavaScript</li>
                                <li>Principles of programming with C#</li>
                                <li>You don’t know JS – series books</li>
                                <li>Many books on self-improvement</li>
                            </ul>
                        </Li>
                        <Li style={{ border: '5px solid #ff0040' }} id="now">
                            <h2 style={{ color: '#ff0040' }}>Now</h2>
                            <PTablet>
                                My experience includes following technologies: HTML, CSS, SASS, JS, Node JS, React,
                                Express JS, Mongo DB, Firebase, GitHub, REST, C#, Unit testing. I'm currently taking
                                courses of graphic design and UI web design. My moto is "never stop learning". At the
                                moment I do not have much experience, but I have a great passion and desire to learn
                                and grow.
                            </PTablet>
                        </Li>
                    </ul>
                    <div style={{ textAlign: 'center' }}>
                        <Button900 onClick={toWorkPage}>View my work</Button900>
                        <Button900 onClick={toContactPage}>Let's talk!</Button900>
                    </div>
                </DivTablet>
            }
        </div>
    )
}

const Button900 = styled.button`
    border: 2px solid white;
    font-size: 1em;
    font-family: Jack, serif;
    padding: 10px 20px;
    border-radius: 25px;
    color: white;
    background-color: transparent;
    margin-right: 15px;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #41f2b6;
        color: black;
        cursor: pointer;
    }
`
const PTablet = styled.p`
    font-size: 2.5vw;
`

const P = styled.p`
    font-size: 1.4vw;
`

const Li = styled.li`
    display: block;
    background-color: lightgray;
    font-family: Jack, serif;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
`
const DivTablet = styled.div`
    width: 90%;
    margin: 0 auto;
`

const Div = styled.div`
    width: 60%;
    margin: 0 auto;
`

export default AllInfo