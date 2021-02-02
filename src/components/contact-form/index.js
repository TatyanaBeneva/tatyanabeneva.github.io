import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Input from '../input'
import SubmitButton from '../submit-button'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handelValidation = () => {
        // Name
        if(!name){
            setErrorName("Name field cannot be empty!")
            return false
        }

        if(!name.match(/[A-Z][a-z]+ [A-Z][a-z]+/)){
            setErrorName("Тhe first and second names must begin with a capital letter and continue with lowercase letters!")
            return false
        }

        // Email
        if(email === ''){
            setErrorEmail("Email field cannot be empty!")
            return false
        }

        if(!email.match(/[A-Za-z0-9.]+@[a-z]+.[a-z]+.?[a-z]+/)){
            setErrorEmail("Email must be valid!")
            return false
        }

        // Message
        if(message === ''){
            setErrorEmail("Message field cannot be empty!")
            return false
        }

        return true
    }

    const contactSubmit = (e) => {
        e.preventDefault()
        if(!handelValidation()){
            return
        } 
    }

    return (
        <Form onSubmit={contactSubmit}>
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