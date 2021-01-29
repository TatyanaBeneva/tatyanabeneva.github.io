import React from 'react'
import styled from 'styled-components'
import TextBox from '../../components/text-box-intro-page'
import Skills from '../../components/skills-intro-page'
import Button from '../../components/button-inro-page'
import './index.module.css'


const IntroPage = () => {

    return (
        <DivImage>
            <Div>
                <TextBox />
                <Skills />
                <Button />
            </Div>
        </DivImage>
    )

}

const DivImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding: 0;
    background-image: url("https://s27389.pcdn.co/wp-content/uploads/2017/05/AdobeStock_51875542.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
`

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