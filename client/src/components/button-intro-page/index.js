import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import Delayed from '../../utils/delayed-component'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'

const Button = () => {

    const isLaptopOrTablet = useMediaQuery({ minWidth: 600 })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 599 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    const history = useHistory();

    const toAbout = (e) => {
        e.preventDefault()

        history.push('/about')
    }
    const toContact = (e) => {
        e.preventDefault()

        history.push('/contact')
    }
    const toWork = (e) => {
        e.preventDefault()

        history.push('/work')
    }

    return (
        <div>
            {isLaptopOrTablet &&
                <Div600>
                    <Delayed waitBeforeShow={1500}>
                        <Span>Go to my projects</Span>
                        <Span>Learn more about me</Span>
                        <div>
                            <ButtonTag onClick={toWork}>
                                <span>
                                    <i className="fas fa-chevron-left"></i>
                                </span>
                            </ButtonTag>
                            <ButtonTag onClick={toAbout}>
                                <span>
                                    <i className="fas fa-chevron-right"></i>
                                </span>
                            </ButtonTag>
                        </div>
                        <div>
                            <ButtonTagDown onClick={toContact}>
                                <span>
                                    <i className="fas fa-chevron-down"></i>
                                </span>
                            </ButtonTagDown>
                        </div>
                        <Span>Contact me</Span>
                    </Delayed>
                </Div600>
            }
            {isTablet &&
                <Div481>
                    <Delayed waitBeforeShow={1500}>
                        <Span>Go to my projects</Span>
                        <Span>Learn more about me</Span>
                        <div>
                            <ButtonTag onClick={toWork}>
                                <span>
                                    <i className="fas fa-chevron-left"></i>
                                </span>
                            </ButtonTag>
                            <ButtonTag onClick={toAbout}>
                                <span>
                                    <i className="fas fa-chevron-right"></i>
                                </span>
                            </ButtonTag>
                        </div>
                        <div>
                            <ButtonTagDown onClick={toContact}>
                                <span>
                                    <i className="fas fa-chevron-down"></i>
                                </span>
                            </ButtonTagDown>
                        </div>
                        <Span>Contact me</Span>
                    </Delayed>
                </Div481>
            }
            {isPhone &&
                <Div481>
                    <Delayed waitBeforeShow={1500}>
                        <Span480>Go to my projects</Span480>
                        <Span480>Learn more about me</Span480>
                        <div>
                            <ButtonTag onClick={toWork}>
                                <span>
                                    <i className="fas fa-chevron-left"></i>
                                </span>
                            </ButtonTag>
                            <ButtonTag onClick={toAbout}>
                                <span>
                                    <i className="fas fa-chevron-right"></i>
                                </span>
                            </ButtonTag>
                        </div>
                        <div>
                            <ButtonTagDown onClick={toContact}>
                                <span>
                                    <i className="fas fa-chevron-down"></i>
                                </span>
                            </ButtonTagDown>
                        </div>
                        <Span480>Contact me</Span480>
                    </Delayed>
                </Div481>
            }
        </div>
    )
}
const Span480 = styled.span`
    font-size: 15px;
    color: white;

    &:first-child {
        margin-right: 30px;
    }
`

const Span = styled.span`
    font-size: 20px;
    color: white;

    &:first-child {
        margin-right: 50px;
    }
`

const Div481 = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 50px;
`


const Div600 = styled.div`
    width: 100%;
    text-align: center;
`

const ButtonTagDown = styled.button`
    background-color: transparent;
    border: none;
    font-size: 40px;
    color: white;
    
    &:hover {
        cursor: pointer;
        font-size: 50px;
        color: pink;
    }
`

const ButtonTag = styled.button`
    background-color: transparent;
    border: none;
    font-size: 35px;
    color: white;
    
    &:hover {
        cursor: pointer;
        font-size: 45px;
        color: pink;
    }

    &:first-child {
        margin-right: 100px;
    }
`
export default Button