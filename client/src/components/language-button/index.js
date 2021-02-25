import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import LanguageContext from '../../Context'
import bgFlag from './bulgaria-flag.png'
import enFlag from './england-flag.png'

const LanguageButton = () => {
    const [display, setDisplay] = useState('none')
    const { language, setLanguage } = useContext(LanguageContext)

    const cookies = new Cookies()

    const changeLanguage = () => {
        setDisplay('block')
    }

    const changeToBg = () => {
        cookies.set('x-lang', 'BG')
        setLanguage('BG')
        setDisplay('none')
    }

    const changeToEn = () => {
        cookies.set('x-lang', 'EN')
        setLanguage('EN')
        setDisplay('none')
    }

    return (
        <span>
            <Span>
                <Button style={{ padding: 0 }} onClick={changeLanguage}>
                    {language === 'EN' ? <Image src={enFlag} /> : <Image src={bgFlag} />} - {language}
                </Button>
            </Span>
            <Div style={{ position: 'absolute', display: display }}>
                <div><Button onClick={changeToBg} ><Image src={bgFlag} /> - Bulgarian</Button></div>
                <div><Button onClick={changeToEn}><Image src={enFlag} /> - English</Button></div>
            </Div>
        </span>
    )
}

const Image = styled.img`
    width: 20px;
`

const Div = styled.div`
    background-color: #373535;
    margin-left: 40px;
    margin-top: 10px;
    width: auto;
    height: auto;
    padding: 10px;
`

const Button = styled.button`
    background-color: transparent;
    border: none;
    font-size: 15px;
    color: white;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        color: #00b6ff;
    }
`

const Span = styled.span`
    margin-left: 20px;
`

export default LanguageButton