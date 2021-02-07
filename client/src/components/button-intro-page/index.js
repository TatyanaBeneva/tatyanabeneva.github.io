import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import Delayed from '../../utils/delayed-component'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'

const Button = () => {

    const isLaptopOrTablet = useMediaQuery({ minWidth: 600, maxWidth: 1600 })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 599 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    const history = useHistory();

    const getBroken = (e) => {
        e.preventDefault()

        history.push('/about')
    }

    return (
        <div>
            {isLaptopOrTablet &&
                <Div600>
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
                </Div600>
            }
            {isTablet &&
                <Div481>
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
                </Div481>
            }
            {isPhone &&
                <Div481>
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
                </Div481>
            }
        </div>
    )
}

const Div481 = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 50px;
`

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

    &:hover{
        font-size: 60px;
        color: pink;
    }
`

const Div600 = styled.div`
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