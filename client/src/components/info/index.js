import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import Link from '../link'

const Info = () => {

    const isLaptop = useMediaQuery({ minWidth: 900, maxWidth: 1600 })
    const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 899 })
    const isPhone = useMediaQuery({ maxWidth: 479 })   

    return (
        <div>
            {isLaptop &&
                <Div900>
                    <Hello> Hello, my name is </Hello>
                    <Name> Tatyana Beneva. </Name>
                    <Description>
                        I have bachelore degree in Finance, but I felt that this wasn't something I wanted to do
                        all my life and soon after I graduated I started learning programming, because I remembered
                        how much I liked and was inspired by the school hours when we studied just basic html.
                        So my journey into the world of programming began!
                    </Description>
                    <Description>
                        Of course I started with <Span>Html</Span> and <Span>CSS</Span>. Then came the turn of <Span>JavaScript</Span> and
                        with that I had to choose which framework to work with. So i did
                        a little research of my own and chose <Span>React</Span> as a start.
                    </Description>
                    <Description>
                        My experience doesn't include only this. Everything I learned and started working with it is
                        described on the page you come from. And I will not stop here!
                    </Description>
                    <Description>
                        At the moment I do not have much experience, but I have a great passion and desire to learn
                        and grow. So if you like it and want to work together <Link href={'/contact'} title={'contact me'} type={'text'} />!
                    </Description>
                </Div900>
            }
            {isTablet &&
                <Div480>
                    <Hello> Hello, my name is </Hello>
                    <Name> Tatyana Beneva. </Name>
                    <Description>
                        I have bachelore degree in Finance, but I felt that this wasn't something I wanted to do
                        all my life and soon after I graduated I started learning programming, because I remembered
                        how much I liked and was inspired by the school hours when we studied just basic html.
                        So my journey into the world of programming began!
                    </Description>
                    <Description>
                        Of course I started with <Span>Html</Span> and <Span>CSS</Span>. Then came the turn of <Span>JavaScript</Span> and
                        with that I had to choose which framework to work with. So i did
                        a little research of my own and chose <Span>React</Span> as a start.
                    </Description>
                    <Description>
                        My experience doesn't include only this. Everything I learned and started working with it is
                        described on the page you come from. And I will not stop here!
                    </Description>
                    <Description>
                        At the moment I do not have much experience, but I have a great passion and desire to learn
                        and grow. So if you like it and want to work together <Link href={'/contact'} title={'contact me'} type={'text'} />!
                    </Description>
                </Div480>
            }
            {isPhone &&
                <Div360>
                    <Hello> Hello, my name is </Hello>
                    <Name360> Tatyana Beneva. </Name360>
                    <Description>
                        I have bachelore degree in Finance, but I felt that this wasn't something I wanted to do
                        all my life and soon after I graduated I started learning programming, because I remembered
                        how much I liked and was inspired by the school hours when we studied just basic html.
                        So my journey into the world of programming began!
                    </Description>
                    <Description>
                        Of course I started with <Span>Html</Span> and <Span>CSS</Span>. Then came the turn of <Span>JavaScript</Span> and
                        with that I had to choose which framework to work with. So i did
                        a little research of my own and chose <Span>React</Span> as a start.
                    </Description>
                    <Description>
                        My experience doesn't include only this. Everything I learned and started working with it is
                        described on the page you come from. And I will not stop here!
                    </Description>
                    <Description>
                        At the moment I do not have much experience, but I have a great passion and desire to learn
                        and grow. So if you like it and want to work together <Link href={'/contact'} title={'contact me'} type={'text'} />!
                    </Description>
                </Div360>
            }
        </div>
    )
}

const Name360 = styled.p`
    font-size: clamp(30px, 8vw, 60px);
    font-weight: bold;
    margin: 0;
    background: linear-gradient(to left, #22b8b4, #1be5e0);
    -webkit-background-clip: text;
   -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

`

const Div360 = styled.div`
    margin: 15px;
    font-style: italic;
`

const Div480 = styled.div`
    margin: 30px;
    font-style: italic;
    padding: 15px 40px;
`

const Span = styled.span`
    background: linear-gradient(to right, #c11da8, #1e2eb9);
    -webkit-background-clip: text;
   -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
`

const Description = styled.p`
    font-size: 20px;
`

const Name = styled.p`
    font-size: clamp(40px, 8vw, 80px);
    font-weight: bold;
    margin: 0;
    background: linear-gradient(to left, #22b8b4, #1be5e0);
    -webkit-background-clip: text;
   -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

`

const Hello = styled.p`
    font-size: 20px;
`

const Div900 = styled.div`
    margin: 80px 150px 30px 150px;
    font-style: italic;
    padding: 15px 40px;
`

export default Info