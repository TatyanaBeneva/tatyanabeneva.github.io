import React from 'react'
import styled from 'styled-components'

const Logo = () => {
    return (
        <Span>TB</Span>
    )
}

const Span = styled.span`
    font-size: 30px;
    font-weight: bold;
    background: -webkit-linear-gradient(right, #c11da8, #1e2eb9);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 2px solid transparent;
    border-image: linear-gradient(to right, #c11da8, #1e2eb9);
    border-image-slice: 1;
`

export default Logo