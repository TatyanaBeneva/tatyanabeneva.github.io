import React from 'react'
import styled from 'styled-components'
import Link from '../link'

const Logo = () => {
    return (
        <Link title={<Span><SpanT>T</SpanT><SpanB>B</SpanB></Span>} href={'/'} type={'logo'}/>
    )
}

const SpanT = styled.span`
    color: #24ece9;
`

const SpanB = styled.span`
    color: #f934ea;
`

const Span = styled.span`
    font-weight: bold;
    border: 2px solid transparent;
    border-image: linear-gradient(to left, #24ece9, #af45da, #f934ea);
    border-image-slice: 1;
`

export default Logo