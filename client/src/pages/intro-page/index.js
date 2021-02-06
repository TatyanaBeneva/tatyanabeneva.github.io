import React from 'react'
import styled from 'styled-components'
import TextBox from '../../components/text-box-intro-page'
import Skills from '../../components/skills-intro-page'
import Button from '../../components/button-intro-page'
import './index.module.css'
import image from './comp.jpg'


class IntroPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isLoading: true }
    }
    
    componentDidMount() {
        this.setState({isLoading: false})
    }

    render() {
        return (
            this.state.isLoading ?
            <div>Loading...</div> :
            <DivImage style={{backgroundImage: `url(${image})`}}>
                <Div>
                    <TextBox />
                    <Skills />
                    <Button />
                </Div>
            </DivImage>
        )
    }
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