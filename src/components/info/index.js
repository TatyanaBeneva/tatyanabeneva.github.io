import React from 'react'
import styled from 'styled-components'

const Info = () => {
    return (
        <Div>
            <Hello> Hello, my name is </Hello>
            <Name> Tatyana Beneva. </Name>
            <Description>
                I have bachelore degree in Finance, but I felt that this wasn't something I wanted to do 
                all my life and soon after I graduated I started learning programming, because I remembered 
                how much I liked and was inspired by the school hours when we studied just basic html.
                So my journey into the world of programming began!
            </Description>
            <Description>
                Of course I started with <Span>Html</Span> and <Span>CSS</Span>. Then came the turn of <Span>JavaScript</Span> and with that I had 
                to choose which framework to work with. So i did a little research of my own and chose <Span>React</Span> as a start.
            </Description>
        </Div>
    )
}

const Span = styled.span`
    background: -webkit-linear-gradient(#c11da8, #1e2eb9);
    background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Description = styled.p`
    font-size: 20px;
`

const Name = styled.p`
    font-size: clamp(40px, 8vw, 80px);
    font-weight: bold;
    margin: 0;
    background: -webkit-linear-gradient(#22b8b4, #1be5e0);
    background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Hello = styled.p`
    font-size: 20px;
`

const Div = styled.div`
    align-items: center;
    margin: 100px 100px 30px 170px;
    font-style: italic;
    /* border: 2px solid black;
    border-radius: 20px;
    padding: 15px; */
`

export default Info