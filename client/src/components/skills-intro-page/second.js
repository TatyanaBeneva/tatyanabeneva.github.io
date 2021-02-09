import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import {secondImg} from '../../utils/skills'

const Second = () => {
    const isDekstop = useMediaQuery({ minWidth: 1600 })
    const isLaptopOrTablet = useMediaQuery({ minWidth: 600, maxWidth: 1599 })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 599 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    const renderImages = (() => {
        return secondImg.map((img, index) => {
            return (
                <Li key={index}>
                    {isDekstop &&
                        <Img1600 src={img} />
                    }
                    {isLaptopOrTablet &&
                        <Img1200 src={img} />
                    }
                    {isTablet &&
                        <Img481 src={img} />
                    }
                    {isPhone &&
                        <Img480 src={img} />
                    }
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

const Img481 = styled.img`
    width: 100%;
    height: 63px;
    border-radius: 50%;
    background-color: white;
`

const Img480 = styled.img`
    width: 100%;
    height: 50px;
    border-radius: 50%;
    background-color: white;
`

const Li= styled.li`
    width: 12.5%;
    margin-left: 1%;

    &:first-child {
        margin-left: 10%;
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
const Img1200 = styled.img`
    width: 100%;
    height: 84px;
    border-radius: 50%;
    background-color: white;
`

const Img1600 = styled.img`
    width: 100%;
    height: 115px;
    border-radius: 50%;
    background-color: white;
`

export default Second