import React from 'react'
import styled from 'styled-components'
import Delayed from '../../utils/delayed-component'

class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isClicked: "none"
        }
    }

    getBroken =async (e) => {
        e.preventDefault()
        console.log(this.state)
        await this.setState({
            isClicked: "block"
        })

        console.log(this.state)
    }

    render() {
        return (
            <Div>
                <Delayed waitBeforeShow={1500}>
                    <ButtonTag onClick={this.getBroken}>
                        <Image src="https://media3.giphy.com/media/QUjrzbwdn2Rc4/giphy.gif"/>
                    </ButtonTag>
                </Delayed>
                <DivAll style={{display: this.state.isClicked}}>
                    <Img src="https://lh3.googleusercontent.com/proxy/yGXqFgbajgyib5bpqBD9piEr-e8MVpV80hLRUk_bCqeRBRHjv_duzZrHjKWahCr74sdDBsA6bH4WL6VoAj2ku1lnMq1se7XHi9FOteVRgG1z3Hlh2CymIx71DoF70BcUZcI" alt="broken"/>
                </DivAll>
            </Div>
        )
    }
}

const Img = styled.img`
    width: 100%;
    height: 100%;
`

const DivAll = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Div = styled.div`
    width: 100%;
    position: relative;
    text-align: center;
`

const Image = styled.img`
    width: 110px;
    height:110px;
`
const ButtonTag = styled.button`
    width: 110px;
    height: 110px;
    background-color: transparent;
    border: none;
`
export default Button