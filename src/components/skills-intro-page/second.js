import React from 'react'
import styled from 'styled-components'
import {secondImg} from '../../utils/skills'

const Second = () => {
    const renderImages = (() => {
        return secondImg.map((img, index) => {
            return (
                <Li key={index}>
                    <Img src={img} />
                </Li>
            )
        })      
    })

    const images = renderImages();
    
    return (
        <ul>
            {images}
        </ul>
    )
}

const Li= styled.li`
    width: 15%;
    margin-left: 1%;

    &:first-child {
        animation-name: first-li-second-ul;
        animation-duration: 1.5s;
    }

    &:nth-child(2) {
        animation-name: second-li-second-ul;
        animation-duration: 1s;
    }

    &:nth-child(3) {
        animation-name: third-li-second-ul;
        animation-duration: 0.5s;
    }

    &:nth-child(4) {
        animation-name: fourth-li-second-ul;
        animation-duration: 0.5s;
    }

    &:nth-child(5) {
        animation-name: fifth-li-second-ul;
        animation-duration: 1s;
    }

    &:last-child {
        animation-name: last-li-second-ul;
        animation-duration: 1.5s;
    }

    @keyframes first-li-second-ul {
        0% {
            left: -200%;
        }
        66% {
            left: -200%;
        }
        100% {
            left: 0;
        }
    }

    @keyframes second-li-second-ul {
        0% {
            left: -200%;
        }
        50% {
            left: -200%;
        }
        100% {
            left: 0;
        }
    }

    @keyframes third-li-second-ul {
        0% {
            left: -200%;
        }
        100% {
            left: 0;
        }
    }

    @keyframes fourth-li-second-ul {
        0% {
            right: -200%;
        }
        100% {
            right: 0;
        }
    }

    @keyframes fifth-li-second-ul {
        0% {
            right: -200%;
        }
        50% {
            right: -200%;
        }
        100% {
            right: 0;
        }
    }

    @keyframes last-li-second-ul {
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
`

const Img = styled.img`
    width: 100%;
    height: 100px;
    border-radius: 50%;
    background-color: white;
`

export default Second