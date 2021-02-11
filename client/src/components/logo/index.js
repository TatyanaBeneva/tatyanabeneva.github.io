import React from 'react'
import styled from 'styled-components'
import Link from '../link'

const Logo = () => {
    return (
        <Link title={<Span>TB</Span>} href={'/'} type={'logo'}/>
    )
}

const Span = styled.span`
    font-weight: bold;
    border: 2px solid #00b6ff;
    color: #00b6ff;
`

export default Logo