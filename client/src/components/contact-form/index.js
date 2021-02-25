import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Input from '../input'
import SubmitButton from '../submit-button'
import Notification from '../notifications'
import LanguageContext from '../../Context'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isSubmited, setIsSubmited] = useState(false)
    const [isErrorSubmited, setIsErrorSubmited] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const {language, } = useContext(LanguageContext)

    const label = {
        'EN': ["What is your name?","Write your email", "What is your message to me?"],
        'BG': ['Как се казваш?', 'Какъв е имейла ти?', 'Какво е твоето съобщение към мен?']
    }

    const placeholder = {
        'EN': ["Type your first and second name...", "Type your email...","Type your message..."],
        'BG': ['Име и фамилия...', 'Имейл...', 'Съобщение...']
    }

    const errors = {
        'EN':["Name field cannot be empty!", "Тhe first and second names must begin with a capital letter and continue with lowercase letters!",
        "Email field cannot be empty!","Email must be valid!","Message field cannot be empty!","Message should more the 10 characters!"],
        'BG': ["Полето за името не може да бъде празно!", "Името и фамилията трябва да започват с главна буква",
        ]
    }

    useEffect(() => {
        if(isSubmited || isErrorSubmited){
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
            setErrorName(errors[language][0])
            return false
        }

        if (!name.match(/[A-Z][a-z]+ [A-Z][a-z]+|[А-Я][а-я]+ [А-Я][а-я]+/)) {
            setErrorName(errors[language][1])
            return false
        }

        // Email
        if (email === '') {
            setErrorEmail(errors[language][2])
            return false
        }

        if (!email.match(/[A-Za-z0-9.]+@[a-z]+.[a-z]+.?[a-z]+/)) {
            setErrorEmail(errors[language][3])
            return false
        }

        // Message
        if (message === '') {
            setErrorMessage(errors[language][4])
            return false
        }
        
        if(message.length <= 10) {
            setErrorMessage(errors[language][5])
            return false
        }

        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let result = handelValidation();
        setIsLoading(true)

        if (!result) {
            setIsLoading(false)
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

        const request = new Request(`https://portfolioemailserver.glitch.me/contact`, options)

        fetch(request)
            .then(res => {
                setName('')
                setEmail('')
                setMessage('')
                setIsLoading(false)
                setIsSubmited(true)
            })
            .catch(e => {
                setIsLoading(false)
                setIsErrorSubmited(true)
            })
        
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                onChange={e => setName(e.target.value)}
                label={label[language][0]}
                name={"name"}
                icon={"far fa-user"}
                placeholder={placeholder[language][0]}
                value={name}
                isError={errorName}
            />
            {errorName ? <Notification error={errorName} /> : ""}
            <Input
                onChange={e => setEmail(e.target.value)}
                label={label[language][1]}
                name={"email"}
                icon={"far fa-envelope"}
                placeholder={placeholder[language][1]}
                value={email}
                isError={errorEmail}
            />
            {errorEmail ? <Notification error={errorEmail} /> : ""}
            <Input
                onChange={e => setMessage(e.target.value)}
                label={label[language][2]}
                name={"message"}
                icon={"far fa-comment-alt"}
                placeholder={placeholder[language][2]}
                value={message}
                isError={errorMessage}
            />
            {errorMessage ? <Notification error={errorMessage} /> : ""}
            <SubmitButton language={language} title={language==='EN' ? 'Submit form' : 'Изпрати формата'} isLoading={isLoading} />
            {isSubmited ? <Div>{language==='EN' ? "Thank you for contacting me! You must have received an automatic reply to the email you entered above." : 
            "Благодаря, че се свързахте с мен! Трябва да получите автоматичен отговор на имейла въведен по-горе от вас"}</Div> : ""}
            {isErrorSubmited ? <DivError>{language==='EN' ? "Тhere are currently server issues, please try again later or use some of the social network I provide." :
            "Вмомента имаме проблеми с изпращането на формата, моля опитайте отново по-късно или използвайте посочените от мен социални мрежи."}
            </DivError> : ''}
        </Form>
    )
}

const Form = styled.form`
    background-color: white;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 5px 10px 8px #9b9b9b;
`

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