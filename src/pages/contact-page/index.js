import React from 'react'
import styled from 'styled-components'
import Logo from '../../components/logo'
import NavBar from '../../components/nav-bar'
import Footer from '../../components/footer'
import ContactForm from '../../components/contact-form'

const ContactPage = () => {
    return (
        <Div>
            <Logo />
            <NavBar />
            <ContactForm />
            <Footer />
        </Div>
    )
}

const Div = styled.div`
    padding: 20px 30px;
`

export default ContactPage