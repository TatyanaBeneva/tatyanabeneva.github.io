import React from 'react'
import styled from 'styled-components'
import Logo from '../../components/logo'
import NavBar from '../../components/nav-bar'
import Footer from '../../components/footer'
import ContactForm from '../../components/contact-form'
import ContactInfo from '../../components/contact-info'

const ContactPage = () => {
    return (
        <Div>
            <Logo />
            <NavBar />
            <DivGrid>
                <ContentDiv>
                    <ContactInfo />
                </ContentDiv>
                <ContentDiv>
                    <ContactForm />
                </ContentDiv>
            </DivGrid>
            <Footer />
        </Div>
    )
}

const ContentDiv = styled.div`
    border: 1px solid black;
    padding: 20px 40px;
    text-align: center;
`

const DivGrid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 80px 100px 30px 100px;
`

const Div = styled.div`
    padding: 20px 30px;
`

export default ContactPage