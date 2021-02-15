import React from 'react'
import styled from 'styled-components'

const AllInfo = () => {
    return (
        <Div>
            <ul style={{ padding: 0 }}>
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
                        <ul style={{padding: '2.5%'}}>
                            <li>HTML/CSS</li>
                            <li>JavaScript Basics</li>
                            <li>JavaScript Advanced</li>
                            <li>JavaScript Applications</li>
                            <li>JavaScript Back-End</li>
                            <li>React JS</li>
                            <li>C# Fundamentals</li>
                        </ul>
                        During this time I was able to read some good books:
                        <ul style={{padding: '2.5%'}}>
                            <li>HTML 5 & CSS 3. Practical programming</li>
                            <li>Basics of programming with JavaScript</li>
                            <li>Principles of programming with C#</li>
                            <li>You don’t know JS – series books</li>
                            <li>Many books on self-improvement</li>
                        </ul>
                    </P>
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
        </Div>
    )
}

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

const Div = styled.div`
    width: 60%;
    margin: 0 auto;
`

export default AllInfo