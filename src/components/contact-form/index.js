import React from 'react'
import styled from 'styled-components'
import Input from '../input'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'

const ContactForm = () => {
    return (
        <Form>
            <Input
                label={"What is your name?"}
                id={"name"}
                icon={"far fa-user"}
                placeholder={"Type your first and second name..."}
            />
            <Input
                label={"Write your email"}
                id={"email"}
                icon={"far fa-envelope"}
                placeholder={"Type your email..."}
            />
            <Input
                label={"What is your message to me?"}
                id={"message"}
                icon={"far fa-comment-alt"}
                placeholder={"Type your message..."}
            />
        </Form>
    )
}

const Form = styled.form`
    
`

export default ContactForm