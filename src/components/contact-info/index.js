import React from 'react'
import styled from 'styled-components'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'

const ContactInfo = () => {
    return (
        <div>
            <P>
                Hi! This form is made especially for you to make it easier to contact me.
            </P>
            <Div>
                <i className="fas fa-arrow-right"></i>
            </Div>
            <P>
                But if you prefer another way of talking, you can always use the social media listed below by me.
            </P>
        </div>
    )
}

const Div = styled.div`
    text-align: center;
    font-size: 40px;
    background: -webkit-linear-gradient(right, #24ece9, #af45da, #f934ea);
    background-clip: text;
    -webkit-text-fill-color: transparent;
`

const P = styled.p`
    font-size: 20px;
`

export default ContactInfo