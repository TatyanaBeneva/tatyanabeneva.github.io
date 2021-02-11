import React from 'react'
import styled from 'styled-components'
import './index.module.css'
import NavBar from '../../components/nav-bar'
import TextBox from '../../components/text-box-intro-page'
import Skills from '../../components/skills-intro-page'

const IntroPage = () => {

    return (
        <DivImage style={{ backgroundColor: 'black'}}>
            <NavBar />
            <Div>
                <TextBox />
                <Skills />
            </Div>
        </DivImage>
    )
}

const Div = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`

const DivImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding: 0;
`


export default IntroPage