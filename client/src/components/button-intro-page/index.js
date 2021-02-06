import React from 'react'
import styled from 'styled-components'
import Delayed from '../../utils/delayed-component'
import { useHistory } from 'react-router-dom'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'

const Button = () => {
    const history = useHistory();

    const getBroken = (e) => {
        e.preventDefault()

        history.push('/about')
    }

    return (
        <Div>
            <Delayed waitBeforeShow={1500}>
                <DivText>
                    <SpanText>
                        Learn more about me and what I do
                    </SpanText>
                </DivText>
                <ButtonTag onClick={getBroken}>
                    <Span>
                        <i className="fas fa-angle-down"></i>
                    </Span>
                </ButtonTag>
            </Delayed>
        </Div>
    )
}

const SpanText = styled.span`
    background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const DivText = styled.div`
    font-size: 20px;
    color: white;
    text-align: center;
`

const Span = styled.span`
    font-size: 50px;
    color: white;
`

const Div = styled.div`
    width: 100%;
    position: fixed;
    text-align: center;
    bottom: 0;
`

const ButtonTag = styled.button`
    background-color: transparent;
    border: none;
    
    &:hover {
        cursor: pointer;
    }
`
export default Button