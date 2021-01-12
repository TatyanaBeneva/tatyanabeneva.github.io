import React from 'react'
import styled from 'styled-components'
import {thirdImg} from '../../utils/skills'

const Third = () => {
    const renderImages = (() => {
        return thirdImg.map((img, index) => {
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
    width: 18%;
    margin-left: 1.1%;

    &:first-child {
        animation-name: first-li-third-ul;
        animation-duration: 6s;
    }

    &:nth-child(2) {
        animation-name: second-li-third-ul;
        animation-duration: 6.5s;
    }

    &:nth-child(3) {
        animation-name: third-li-third-ul;
        animation-duration: 7s;
    }

    &:nth-child(4) {
        animation-name: fourth-li-third-ul;
        animation-duration: 7.5s;
    }

    &:last-child {
        animation-name: last-li-third-ul;
        animation-duration: 8s;
    }

    @keyframes first-li-third-ul {
        0% {
            right: -200%;
        }
        91.6% {
            right: -200%;
        }
        100% {
            right: 0;
        }
    }

    @keyframes second-li-third-ul {
        0% {
            right: -200%;
        }
        92.3% {
            right: -200%;
        }
        100% {
            right: 0;
        }
    }

    @keyframes third-li-third-ul {
        0% {
            right: -200%;
        }
        92.85% {
            right: -200%;
        }
        100% {
            right: 0;
        }
    }

    @keyframes fourth-li-third-ul {
        0% {
            right: -200%;
        }
        93.3% {
            right: -200%;
        }
        100% {
            right: 0;
        }
    }

    @keyframes last-li-third-ul {
        0% {
            right: -200%;
        }
        93.75% {
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

const Ul = styled.ul`
    width: 83%;
    margin: auto;
`
export default Third