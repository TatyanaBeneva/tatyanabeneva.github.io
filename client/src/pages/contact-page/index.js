import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import NavBar from '../../components/nav-bar'
import Footer from '../../components/footer'
import ContactForm from '../../components/contact-form'
import ContactInfo from '../../components/contact-info'
import ContactInfoPhoneResolution from '../../components/contact-info-phone-resolution'

const ContactPage = () => {

    const isLaptop = useMediaQuery({ minWidth: 900 })
    const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 899 })
    const isPhone = useMediaQuery({maxWidth: 599})

    return (
        <div>
            <NavBar />
            {isLaptop &&
                <DivGridLaptop>
                    <ContentDiv>
                        <ContactInfo />
                    </ContentDiv>
                    <ContentDiv>
                        <ContactForm />
                    </ContentDiv>
                </DivGridLaptop>
            }
            {isTablet &&
                <DivGridTablet>
                    <ContentDiv>
                        <ContactInfo />
                    </ContentDiv>
                    <ContentDiv>
                        <ContactForm />
                    </ContentDiv>
                    <ContentDiv>
                        <ContactInfoPhoneResolution />
                    </ContentDiv>
                </DivGridTablet>
            }
            {isPhone &&
                <DivGridPhone>
                    <ContentDiv>
                        <ContactInfo />
                    </ContentDiv>
                    <ContentDiv>
                        <ContactForm />
                    </ContentDiv>
                    <ContentDiv>
                        <ContactInfoPhoneResolution />
                    </ContentDiv>
                </DivGridPhone>
            }
            <Footer />
        </div>
    )
}

const DivGridPhone = styled.div`
    margin: 50px 30px 30px 30px;
`

const DivGridTablet = styled.div`
    margin: 80px 100px 30px 100px;
`

const ContentDiv = styled.div`
    padding: 20px 40px;
`

const DivGridLaptop = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 80px 100px 30px 100px;
`

export default ContactPage