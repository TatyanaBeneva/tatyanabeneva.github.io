import React, { useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'
import ContactInfoPhoneResolution from '../contact-info-phone-resolution'

const ContactInfo = () => {

    const isLaptop = useMediaQuery({ minWidth: 900 })
    const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 899 })
    const isPhone = useMediaQuery({ maxWidth: 599 })

    return (
        <div>
            {isLaptop &&
                <div>
                    <P>
                        Hi! This form is made especially for you to make it easier to contact me. Just write your
                        first and second names in the first field so I know who to contact, then write your email
                        so I can reply to you, and finally submit your message to me. To send the data,
                        just press the button "Submit form".
                    </P>
                    <Div>
                        <i className="fas fa-arrow-right"></i>
                    </Div>
                    <ContactInfoPhoneResolution />
                </div>
            }
            {isTablet &&
                <div>
                    <P>
                        Hi! This form is made especially for you to make it easier to contact me. Just write your
                        first and second names in the first field so I know who to contact, then write your email
                        so I can reply to you, and finally submit your message to me. To send the data,
                        just press the button "Submit form".
                    </P>
                    <Div>
                        <i className="fas fa-arrow-down"></i>
                    </Div>
                </div>
            }
            {isPhone &&
                <div>
                    <P>
                        Hi! This form is made especially for you to make it easier to contact me. Just write your
                        first and second names in the first field so I know who to contact, then write your email
                        so I can reply to you, and finally submit your message to me. To send the data,
                        just press the button "Submit form".
                    </P>
                    <Div>
                        <i className="fas fa-arrow-down"></i>
                    </Div>
                </div>
            }
        </div>
    )
}

const Div = styled.div`
    text-align: center;
    font-size: 40px;
    background: linear-gradient(to right, #24ece9, #af45da, #f934ea);
    -webkit-background-clip: text;
   -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
`

const P = styled.p`
    font-size: 20px;
    font-style: italic;
    color: #34495e;
`

export default ContactInfo