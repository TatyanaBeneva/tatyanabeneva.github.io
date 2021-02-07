import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Input from '../input'
import SubmitButton from '../submit-button'
import Notification from '../notifications'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isSubmited, setIsSubmited] = useState(false)

    useEffect(() => {
        if(isSubmited){
            setTimeout(() => {
                setIsSubmited(false)
            }, 7000)
        }
    })

    const handelValidation = () => {
        setErrorName('')
        setErrorEmail('')
        setErrorMessage('')
        // Name
        if (!name) {
            setErrorName("Name field cannot be empty!")
            return false
        }

        if (!name.match(/[A-Z][a-z]+ [A-Z][a-z]+/)) {
            setErrorName("Тhe first and second names must begin with a capital letter and continue with lowercase letters!")
            return false
        }

        // Email
        if (email === '') {
            setErrorEmail("Email field cannot be empty!")
            return false
        }

        if (!email.match(/[A-Za-z0-9.]+@[a-z]+.[a-z]+.?[a-z]+/)) {
            setErrorEmail("Email must be valid!")
            return false
        }

        // Message
        if (message === '') {
            setErrorMessage("Message field cannot be empty!")
            return false
        }
        
        if(message.length <= 10) {
            setErrorMessage("Message should more the 10 characters!")
            return false
        }

        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let result = handelValidation();
        console.log(name, email, message)

        if (!result) {
            return
        }

        let data = { name: name, email: email, message: message }

        axios.post(`/contact`, data).catch(e => console.log(e))

        setName('')
        setEmail('')
        setMessage('')

        setIsSubmited(true)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                onChange={e => setName(e.target.value)}
                label={"What is your name?"}
                name={"name"}
                icon={"far fa-user"}
                placeholder={"Type your first and second name..."}
                value={name}
                isError={errorName}
            />
            {errorName ? <Notification error={errorName} /> : ""}
            <Input
                onChange={e => setEmail(e.target.value)}
                label={"Write your email"}
                name={"email"}
                icon={"far fa-envelope"}
                placeholder={"Type your email..."}
                value={email}
                isError={errorEmail}
            />
            {errorEmail ? <Notification error={errorEmail} /> : ""}
            <Input
                onChange={e => setMessage(e.target.value)}
                label={"What is your message to me?"}
                name={"message"}
                icon={"far fa-comment-alt"}
                placeholder={"Type your message..."}
                value={message}
                isError={errorMessage}
            />
            {errorMessage ? <Notification error={errorMessage} /> : ""}
            <SubmitButton title={"Submit form"} />
            {isSubmited ? <Div>Thank you for contacting me! You must have received an automatic reply 
                to the email you entered above.</Div> : ""}
        </Form>
    )
}

const Div = styled.div`
    margin-top: 20px;
    color: green;
    font-size: 20px;
    font-style: italic;
`

const Form = styled.form`
    margin-left: 80px;
    
`

export default ContactForm