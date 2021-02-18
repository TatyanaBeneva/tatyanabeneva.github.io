import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import NavBar from '../../components/nav-bar'
import Footer from '../../components/footer'
import ContactForm from '../../components/contact-form'
import ContactInfo from '../../components/contact-info'
import SharedIcons from '../../components/share-list-icons'

const ContactPage = () => {

    const isLaptop = useMediaQuery({ minWidth: 768 })
    const isTablet = useMediaQuery({ maxWidth: 767 })

    return (
        <div>
            <NavBar />
            {isLaptop &&
                <DivGridLaptop>
                    <ContactInfo />
                    <ContactForm />
                </DivGridLaptop>
            }
            {isTablet &&
                <DivGridTablet>
                    <ContactInfo />
                    <ContactForm />
                    <SharedIcons />
                </DivGridTablet>
            }
            <Footer />
        </div>
    )
}

const DivGridTablet = styled.div`
    margin: 80px 20px 30px 20px;
`


const DivGridLaptop = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 80px 100px 30px 100px;
`

export default ContactPage