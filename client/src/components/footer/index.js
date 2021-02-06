import React from 'react'
import styled from 'styled-components'

const FooterComponent = () => {
    return (
        <Footer>
            Designed & Build by Tatyana Beneva
        </Footer>
    )
}

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    font-size: 15px;
    margin: 10px 40%;
`

export default FooterComponent