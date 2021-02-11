import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import Skill from '../skill'

const Skills = () => {

    const isLaptop = useMediaQuery({ minWidth: 1200 })
    const isTabletOrLaptop = useMediaQuery({ minWidth: 900, maxWidth: 1199 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 899 })
    const isBigPhone = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    return (
        <Div>
            <DivCircle>
                <DivCSS>
                    <Skill icon="fab fa-css3-alt" text="CSS 3" />
                </DivCSS>
                <DivHTML>
                    <Skill icon="fab fa-html5" text="HTML 5" />
                </DivHTML>
                <DivJS>
                    <Skill icon="fab fa-js-square" text="JavaScript" />
                </DivJS>
                <DivNode>
                    <Skill icon="fab fa-node-js" text="Node JS" />
                </DivNode>
                <DivReact>
                    <Skill icon="fab fa-react" text="React JS" />
                </DivReact>
                <DivGit>
                    <Skill icon="fab fa-github" text="GitHub" />
                </DivGit>
            </DivCircle>
        </Div>
    )
}

const DivGit = styled.div`
    position: absolute;
    bottom: 15%;
    left: -15%;
    transform: rotate(0deg);
	transition: transform 0.7s linear;
    animation-name: git;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-timing-function: linear;

    @keyframes git {
        from {
            transform: rotate(360deg)
        }
        to {
            transform: rotate(0deg)
        }
    }
`
const DivReact = styled.div`
    position: absolute;
    bottom: -5%;
    right: 30%;
    transform: rotate(0deg);
	transition: transform 0.7s linear;
    animation-name: react;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-timing-function: linear;

    @keyframes react {
        from {
            transform: rotate(360deg)
        }
        to {
            transform: rotate(0deg)
        }
    }
`

const DivNode = styled.div`
    position: absolute;
    top: 20%;
    left: -15%;
    transform: rotate(0deg);
	transition: transform 0.7s linear;
    animation-name: node;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-timing-function: linear;

    @keyframes node {
        from {
            transform: rotate(360deg)
        }
        to {
            transform: rotate(0deg)
        }
    }
`

const DivJS = styled.div`
    position: absolute;
    right: -25%;
    bottom: 20%;
    transform: rotate(0deg);
	transition: transform 0.7s linear;
    animation-name: js;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-timing-function: linear;

    @keyframes js {
        from {
            transform: rotate(360deg)
        }
        to {
            transform: rotate(0deg)
        }
    }
`

const DivHTML = styled.div`
    position: absolute;
    right: -10%;
    top: 15%;
    transform: rotate(0deg);
	transition: transform 0.7s linear;
    animation-name: html;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-timing-function: linear;

    @keyframes html {
        from {
            transform: rotate(360deg)
        }
        to {
            transform: rotate(0deg)
        }
    }
`

const DivCSS = styled.div`
    position: absolute;
    top: -5%;
    left: 30%;
    transform: rotate(0deg);
	transition: transform 0.7s linear;
    animation-name: css;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-timing-function: linear;

    @keyframes css {
        from {
            transform: rotate(360deg)
        }
        to {
            transform: rotate(0deg)
        }
    }
`

const DivCircle = styled.div`
    position:  absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    background-color: #00b6ff;
    width: 340px;
    height: 340px;
    margin: auto;
    border-radius: 50%;
    transform: rotate(0deg);
	transition: transform 0.7s linear;
    animation-name: sun;
    animation-timing-function: linear;
    animation-duration: 10s;
    animation-iteration-count: infinite;

    @keyframes sun {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

const Div = styled.div`
    position: relative;
    width: 100%;
`

export default Skills