import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const TextBox = (props) => {
    const isDekstop = useMediaQuery({ minWidth: 1600})
    const isLaptop = useMediaQuery({ minWidth: 1200 , maxWidth: 1599})
    const isTabletOrLaptop = useMediaQuery({ minWidth: 900, maxWidth: 1199 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 899 })
    const isBigPhone = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

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
        <Div>
            <Hello> Hello! </Hello>
            <Name> I'm Tatyana Beneva, creative web designer.</Name>
            <Description>
                My recent experience is building React Single page Applications with Node Js as a back-end.
            </Description>
            <Button onClick={toWorkPage}>View my work</Button>
            <Button onClick={toContactPage}>Let's talk</Button>
        </Div>
    )
}

const Button = styled.button`
    border: 2px solid white;
    font-size: 16px;
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

const Description = styled.p`
    color: white;
    font-size: 18px;
    font-family: Jack, serif;
    letter-spacing: 2px;
    margin-bottom: 40px;


`

const Name = styled.p`
    color: white;
    font-size: 65px;
    margin: 0;
    font-family: Jack, serif;
`

const Hello = styled.p`
    color: #00b6ff;
    font-size: 20px;
    letter-spacing: 3px;
    font-family: Jack, serif;
`

const Div = styled.div`
    margin-top: 100px;
    margin-left: 100px;
`

export default TextBox