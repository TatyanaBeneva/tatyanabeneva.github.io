import React from 'react'
import styled from 'styled-components'
import Delayed from '../../utils/delayed-component'

const Button = (props) => {
    return (
        <Div>
            <Delayed waitBeforeShow={1500}>
                <ButtonTag>
                    Destroy this page!
                    <Span></Span>
                    <Span></Span>
                    <Span></Span>
                    <Span></Span>
                </ButtonTag>
            </Delayed>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    position: relative;
    margin-top: 2%;
    text-align: center;
`

const ButtonTag = styled.button`
    width: 200px;
    height: 70px;
    background: linear-gradient(to left top, #121111 50%, #2c2626 50%);
    border-style: none;
    color: #fff;
    font-size: 23px;
    letter-spacing: 3px;
    font-family: "Lato";
    font-weight: 600;
    outline: none;
    cursor: pointer;
    position: relative;
    padding: 0px;
    overflow: hidden;
    transition: all 0.5s;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    animation-name: showButton;
    animation-duration: 0.5s;

    @keyframes showButton {
        0% {
            right: -200%;
        }
        66% {
            right: -200%;
        }
        100% {
            right: 0;
        }
    }

    &:hover {
        transition: all 0.5s;
        transform: rotate(-3deg) scale(1.1);
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
    }
    &:hover span {
        animation-play-state: paused;
    }
`

const Span = styled.span`
    position: absolute;
    display: block;

    &:nth-child(1) {
        height: 3px;
        width: 200px;
        top: 0px;
        left: -200px;
        background: linear-gradient(to right, rgba(0, 0, 0, 0), #f6e58d);
        border-top-right-radius: 1px;
        border-bottom-right-radius: 1px;
        animation: span1 2s linear infinite;
        animation-delay: 1s;
    }

    @keyframes span1 {
        0% {
            left: -200px;
        }
        100% {
            left: 200px;
        }
    }

    &:nth-child(2) {
        height: 70px;
        width: 3px;
        top: -70px;
        right: 0px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #f6e58d);
        border-bottom-left-radius: 1px;
        border-bottom-right-radius: 1px;
        animation: span2 2s linear infinite;
        animation-delay: 2s;
    }

    @keyframes span2 {
        0% {
            top: -70px;
        }
        100% {
            top: 70px;
        }
    }

    &:nth-child(3) {
        height: 3px;
        width: 200px;
        right: -200px;
        bottom: 0px;
        background: linear-gradient(to left, rgba(0, 0, 0, 0), #f6e58d);
        border-top-left-radius: 1px;
        border-bottom-left-radius: 1px;
        animation: span3 2s linear infinite;
        animation-delay: 3s;
    }

    @keyframes span3 {
        0% {
            right: -200px;
        }
        100% {
            right: 200px;
        }
    }

    &:nth-child(4) {
        height: 70px;
        width: 3px;
        bottom: -70px;
        left: 0px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0), #f6e58d);
        border-top-right-radius: 1px;
        border-top-left-radius: 1px;
        animation: span4 2s linear infinite;
        animation-delay: 4s;
    }

    @keyframes span4 {
        0% {
            bottom: -70px;
        }
        100% {
            bottom: 70px;
        }
    }
`

export default Button