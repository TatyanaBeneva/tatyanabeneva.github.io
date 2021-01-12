import React from 'react'
import './index.module.css'
import styled from 'styled-components'
import './index.module.css'
import TextBox from '../../components/text-box-intro-page'
import Skills from '../../components/skills-intro-page'


const IntroPage = () => {
    return (
        <Div>
            <TextBox />
            <Skills />
        </Div>
    )
}

const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

export default IntroPage