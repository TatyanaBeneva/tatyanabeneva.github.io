import React from 'react'
import styled from 'styled-components'
import {firstImg} from '../../utils/skills'

const First = () => {
    const renderImages = (() => {
        return firstImg.map((img, index) => {
            return (
                <Li key={index}>
                    <Img src={img} />
                </Li>
            )
        })      
    })

    const images = renderImages();
    
    return (
        <Ul>
            {images}
        </Ul>
    )
}

const Li = styled.li`
    position: relative;
    width: 15%;
    margin-left: 1.1%;

    &:first-child {
        margin-left: 10%;
        animation-name: first-li-first-ul;
        animation-duration: 1.5s;
    }

    &:nth-child(2) {
        animation-name: second-li-first-ul;
        animation-duration: 1s;
    }

    &:nth-child(3) {
        animation-name: third-li-first-ul;
        animation-duration: 0.5s;
    }

    &:nth-child(4) {
        animation-name: fourth-li-first-ul;
        animation-duration: 1s;
    }

    &:last-child {
        animation-name: last-li-first-ul;
        animation-duration: 1.5s;
    }

    @keyframes first-li-first-ul {
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

    @keyframes second-li-first-ul {
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

    @keyframes third-li-first-ul {
        0% {
            right: -200%;
        }
        100% {
            right: 0;
        }
    }

    @keyframes fourth-li-first-ul {
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

    @keyframes last-li-first-ul {
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
    height: 84px;
    border-radius: 50%;
    background-color: white;
`

const Ul = styled.ul`
    width: 83%;
    margin: auto;
`

export default First