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
        animation-duration: 3s;
    }

    &:nth-child(2) {
        animation-name: second-li-second-ul;
        animation-duration: 3.5s;
    }

    &:nth-child(3) {
        animation-name: third-li-second-ul;
        animation-duration: 4s;
    }

    &:nth-child(4) {
        animation-name: fourth-li-second-ul;
        animation-duration: 4.5s;
    }

    &:nth-child(5) {
        animation-name: fifth-li-second-ul;
        animation-duration: 5s;
    }

    &:last-child {
        animation-name: last-li-second-ul;
        animation-duration: 5.5s;
    }

    @keyframes first-li-second-ul {
        0% {
            right: -200%;
        }
        83.3% {
            right: -200%;
        }
        100% {
            right: 0;
        }
    }

    @keyframes second-li-second-ul {
        0% {
            right: -200%;
        }
        85.7% {
            right: -200%;
        }
        100% {
            right: 0;
        }
    }

    @keyframes third-li-second-ul {
        0% {
            right: -200%;
        }
        87.5% {
            right: -200%;
        }
        100% {
            right: 0;
        }
    }

    @keyframes fourth-li-second-ul {
        0% {
            right: -200%;
        }
        88.9% {
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
        90% {
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
        90.9% {
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