import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Input from '../input'
import SubmitButton from '../submit-button'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <Form method="POST" action="/contact">
            <Input
                onChange={e => setName(e.target.value)}
                label={"What is your name?"}
                name={"name"}
                icon={"far fa-user"}
                placeholder={"Type your first and second name..."}
            />
            <Input
                onChange={e => setEmail(e.target.value)}
                label={"Write your email"}
                name={"email"}
                icon={"far fa-envelope"}
                placeholder={"Type your email..."}
            />
            <Input
                onChange={e => setMessage(e.target.value)}
                label={"What is your message to me?"}
                name={"message"}
                icon={"far fa-comment-alt"}
                placeholder={"Type your message..."}
            />
            <SubmitButton title={"Submit form"} />
        </Form>
    )
}

const Form = styled.form`
    margin-left: 80px;
    
`

export default ContactForm