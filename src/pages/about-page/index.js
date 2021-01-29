import React from 'react'
import './index.module.css'
import styled from 'styled-components'
import NavBar from '../../components/nav-bar'
import Logo from '../../components/logo'
import Info from '../../components/info'
import Footer from '../../components/footer'

const AboutPage = () => {
    return (
        <Div>
            <Logo />
            <NavBar />
            <Info />
            <Footer />
        </Div>
    )
}

const Div = styled.div`
    padding: 20px 100px 20px 30px;
`

export default AboutPage