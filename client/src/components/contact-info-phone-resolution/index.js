import React, { useState } from 'react'
import styled from 'styled-components'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'
import Icon from '../social-media-icons'
import {useMediaQuery} from 'react-responsive'

const ContactInfoPhoneResolution = () => {
    const [email, setEmail] = useState(false)

    const isDekstop = useMediaQuery({ minWidth: 1600 })
    const isLaptop = useMediaQuery({ maxWidth: 1599 })

    const handleClick = (e) => {
        e.preventDefault()
        email ? setEmail(false) : setEmail(true)
        console.log(email)
    }

    return (
        <div>
            {isDekstop &&
                <div>
                    <P1600>
                        But if you prefer another way of talking, you can always use the social media listed below by me.
                    </P1600>
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
            }
            {isLaptop &&
                <div>
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
            }
        </div>
    )
}

const DivEmail = styled.div`
    width: 100%;
    text-align: center;
    font-style: italic;
    color: #34495e;
`

const Ul = styled.ul`
    padding: 0;
    text-align: center;
`

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

const P1600 = styled.p`
    font-size: 30px;
    font-style: italic;
    color: #34495e;
`

export default ContactInfoPhoneResolution