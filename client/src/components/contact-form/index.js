import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Input from '../input'
import SubmitButton from '../submit-button'
import Notification from '../notifications'
require('dotenv').config();

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isSubmited, setIsSubmited] = useState(false)
    const [isErrorSubmited, setIsErrorSubmited] = useState(false)

    useEffect(() => {
        if(isSubmited){
            setTimeout(() => {
                setIsSubmited(false)
                setIsErrorSubmited(false)
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

        if (!result) {
            return
        }

        let data = { name: name, email: email, message: message }
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const options = {
            method: 'POST',
            headers: headers,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(data)
        }

        const request = new Request(`${process.env.API}/contact`, options)

        fetch(request)
            .then(res => {
                setName('')
                setEmail('')
                setMessage('')
        
                setIsSubmited(true)
            })
            .catch(e => {
                setIsErrorSubmited(true)
            })
        
    }

    return (
        <form onSubmit={handleSubmit}>
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
            {isErrorSubmited ? <DivError>Тhere are currently server issues, please try again later.
            </DivError> : ''}
        </form>
    )
}
const DivError = styled.div`
    margin-top: 20px;
    color: red;
    font-size: 20px;
    font-style: italic;
`

const Div = styled.div`
    margin-top: 20px;
    color: green;
    font-size: 20px;
    font-style: italic;
`

export default ContactForm