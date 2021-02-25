import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import LanguageContext from '../../Context'

const LanguageButton = () => {
    const [isClicked, setIsClicked] = useState(false)
    const {language, setLanguage} = useContext(LanguageContext)

    const cookies = new Cookies()

    const changeLanguage = () => {
        setIsClicked(!isClicked)
    }

    const changeToBg =() =>{
        cookies.set('x-lang', 'BG')
        setLanguage('BG')
    }

    const changeToEn = () =>{
        cookies.set('x-lang', 'EN')
        setLanguage('EN')
    }

    return (
        <span>
            <Span>
                <Button style={{ padding: 0 }} onClick={changeLanguage}>
                    {language==='EN' ? "Language" : "Език"} - {language}
                </Button>
            </Span>
            {isClicked ?
                <Div style={{ position: 'absolute' }}>
                    <div><Button onClick={changeToBg} >BG - Bulgarian</Button></div>
                    <div><Button onClick={changeToEn}>EN - English</Button></div>
                </Div> : ''
            }
        </span>
    )
}

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