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
    background: -webkit-linear-gradient(left, #24ece9, #af45da, #f934ea);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 2px solid transparent;
    border-image: linear-gradient(to left, #24ece9, #af45da, #f934ea);
    border-image-slice: 1;
`

export default Logo