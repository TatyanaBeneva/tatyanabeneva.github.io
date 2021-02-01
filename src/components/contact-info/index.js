import React, {useState} from 'react'
import styled from 'styled-components'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'
import Icon from '../social-media-icons'

const ContactInfo = () => {

    const  [email, setEmail] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        email ? setEmail(false) : setEmail(true)
        console.log(email)
    }

    return (
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
            <P>
                But if you prefer another way of talking, you can always use the social media listed below by me.
            </P>
            <Div>
                <i className="fas fa-arrow-down"></i>
            </Div>
            <Ul>
                <Icon icon={"fab fa-facebook-f"} link={"https://www.facebook.com/tatjana.beneva.1/"} />
                <Icon icon={"fab fa-linkedin-in"} link={"https://www.linkedin.com/in/tatyana-beneva-8567b01b1"} />
                <Icon icon={"far fa-envelope"} onClick={handleClick} />
            </Ul>
            {email ? <DivEmail> tatyana.v.beneva@gmail.com </DivEmail> : null}
        </div>
    )
}

const DivEmail = styled.div`
    width: 100%;
    text-align: center;
`

const Ul = styled.ul`
    padding: 0;
    text-align: center;
`

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