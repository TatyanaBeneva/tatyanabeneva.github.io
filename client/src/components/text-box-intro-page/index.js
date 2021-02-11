import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const TextBox = (props) => {
    const isDekstop = useMediaQuery({ minWidth: 1600})
    const isLaptop = useMediaQuery({ minWidth: 1200 , maxWidth: 1599})
    const isTabletOrLaptop = useMediaQuery({ minWidth: 900, maxWidth: 1199 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 899 })
    const isBigPhone = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    return (
        <Div>
            <Hello> Hello! </Hello>
            <Name> I'm Tatyana Beneva, creative web designer.</Name>
            <Description>
                My recent experience is building React Single page Applications with Node Js as a back-end.
            </Description>
        </Div>
    )
}

const Description = styled.p`
    color: white;
    font-size: 18px;
    font-family: Jack, serif;
    letter-spacing: 2px;


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