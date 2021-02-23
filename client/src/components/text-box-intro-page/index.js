import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import LanguageContext from '../../Context'

const TextBox = (props) => {
    const { language, } = useContext(LanguageContext)
    const isLaptop = useMediaQuery({ minWidth: 1200 })
    const isTabletOrLaptop = useMediaQuery({ minWidth: 900, maxWidth: 1199 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 899 })
    const isBigPhone = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    const history = useHistory();

    const toWorkPage = (e) => {
        e.preventDefault()
        history.push('/work')
    }

    const toContactPage = (e) => {
        e.preventDefault()
        history.push('/contact')
    }

    const text = {
        'EN': ["Hello!", "I'm Tatyana Beneva, creative web developer.",
            "My recent experience is building React Single page Applications with Node JS as a back-end.",
            "View my work", "Let's talk"],
        'BG': ['Здравейте!', 'Казвам се Татяна Бенева и разработвам уеб приложения.',
            'Най-скорошният ми опит е в създаването на уеб страници използвайки React JS и Node JS',
            'Виж проктите ми', 'Свържи се с мен']
    }

    return (
        <div>
            {isLaptop &&
                <Div1200>
                    <Hello1200> {text[language][0]} </Hello1200>
                    <Name1200>{text[language][1]} </Name1200>
                    <Description1200>
                        {text[language][2]}
                    </Description1200>
                    <Button1200 onClick={toWorkPage}>{text[language][3]}</Button1200>
                    <Button1200 onClick={toContactPage}>{text[language][4]}</Button1200>
                </Div1200>
            }
            {isTabletOrLaptop &&
                <Div900>
                    <Hello1200> {text[language][0]} </Hello1200>
                    <Name900> {text[language][1]}</Name900>
                    <Description1200>
                        {text[language][2]}
                    </Description1200>
                    <Button1200 onClick={toWorkPage}>{text[language][3]}</Button1200>
                    <Button1200 onClick={toContactPage}>{text[language][4]}</Button1200>
                </Div900>
            }
            {isTablet &&
                <Div900>
                    <Hello1200> {text[language][0]} </Hello1200>
                    <Name900> {text[language][1]}</Name900>
                    <Description1200>
                        {text[language][2]}
                    </Description1200>
                    <Button1200 onClick={toWorkPage}>{text[language][3]}</Button1200>
                    <Button1200 onClick={toContactPage}>{text[language][4]}</Button1200>
                </Div900>
            }
            {isBigPhone &&
                <Div900 style={{ textAlign: 'center' }}>
                    <Hello1200> {text[language][0]} </Hello1200>
                    <Name900> {text[language][1]}</Name900>
                    <Description1200>
                        {text[language][2]}
                    </Description1200>
                    <Button1200 onClick={toWorkPage}>{text[language][3]}</Button1200>
                    <Button1200 onClick={toContactPage}>{text[language][4]}</Button1200>
                </Div900>
            }
            {isPhone &&
                <Div900 style={{ textAlign: 'center' }}>
                    <Hello1200> {text[language][0]} </Hello1200>
                    <Name900> {text[language][1]}</Name900>
                    <Description1200>
                        {text[language][2]}
                    </Description1200>
                    <Button1200 onClick={toWorkPage}>{text[language][3]}</Button1200>
                    <Button1200 onClick={toContactPage}>{text[language][4]}</Button1200>
                </Div900>
            }
        </div>
    )
}

const Button1200 = styled.button`
    border: 2px solid white;
    font-size: 1em;
    font-family: Jack, serif;
    padding: 10px 20px;
    border-radius: 25px;
    color: white;
    background-color: transparent;
    margin-right: 15px;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #41f2b6;
        color: black;
        cursor: pointer;
    }
`

const Description1200 = styled.p`
    color: white;
    font-size: 1.125em;
    font-family: Jack, serif;
    letter-spacing: 2px;
    margin-bottom: 40px;


`
const Name900 = styled.p`
    color: white;
    font-size: 3em;
    margin: 0 30px 0 0;
    font-family: Jack, serif;
`
const Name1200 = styled.p`
    color: white;
    font-size: 4.0625em;
    margin: 0;
    font-family: Jack, serif;
`

const Hello1200 = styled.p`
    color: #00b6ff;
    font-size: 1.25em;
    letter-spacing: 3px;
    font-family: Jack, serif;
`
const Div900 = styled.div`
    margin-top: 30px;
    margin-left: 10px;
`
const Div1200 = styled.div`
    margin-top: 50px;
    margin-left: 100px;
`

export default TextBox