import React from 'react'
import styled from 'styled-components'
import NavBar from '../../components/nav-bar'
import Footer from '../../components/footer'
import ContactForm from '../../components/contact-form'
import ContactInfo from '../../components/contact-info'

const ContactPage = () => {
    return (
        <div>
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
        </div>
    )
}

const ContentDiv = styled.div`
    padding: 20px 40px;
`

const DivGrid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 80px 100px 30px 100px;
`

export default ContactPage