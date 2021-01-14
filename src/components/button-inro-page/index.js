import React from 'react'
import styled from 'styled-components'
import Delayed from '../../utils/delayed-component'

const Button = (props) => {
    return (
        <Div>
            <Delayed waitBeforeShow={1500}>
                <A href="/about"><Image src="https://media3.giphy.com/media/QUjrzbwdn2Rc4/giphy.gif"/></A>
            </Delayed>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    position: relative;
    text-align: center;
`

const Image = styled.img`
    width: 110px;
    height:110px;
`
const A = styled.a`
    width: 110px;
    height: 110px;
`
export default Button