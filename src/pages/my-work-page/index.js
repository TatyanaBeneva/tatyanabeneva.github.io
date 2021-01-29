import React from 'react'
import styled from 'styled-components'
import Logo from '../../components/logo'
import NavBar from '../../components/nav-bar'
import Footer from '../../components/footer'

const MyWorkPage = () => {
    return (
        <Div>
            <Logo />
            <NavBar />
            <Footer />
        </Div>
    )
}

const Div = styled.div`
    padding: 20px 100px 20px 30px;
`

export default MyWorkPage