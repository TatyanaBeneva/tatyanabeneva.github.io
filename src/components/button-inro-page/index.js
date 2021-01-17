import React from 'react'
import styled from 'styled-components'
import Delayed from '../../utils/delayed-component'
import broken from './broken.png'
import {withRouter} from 'react-router-dom'

class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isClicked: "none"
        }

        this.props = props
    }

    getBroken =async (e) => {
        e.preventDefault()

        await this.setState({
            isClicked: "block"
        })

        await setTimeout(() => {
            this.props.history.push('/about')
        }, 2000);
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
                    <Img src={broken} alt="broken"/>
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
export default withRouter(Button)