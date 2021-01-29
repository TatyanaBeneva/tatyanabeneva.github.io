import React from 'react'
import './index.module.css'
import styled from 'styled-components'
import NavBar from '../../components/nav-bar'
import Logo from '../../components/logo'
import Info from '../../components/info'

const AboutPage = () => {
    return (
        <Div>
            <Logo />
            <NavBar />
            <Info />
        </Div>
    )
}

const Div = styled.div`
    padding: 20px 100px 20px 30px;
`

export default AboutPage