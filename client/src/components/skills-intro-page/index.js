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
            {isLaptop &&
                <DivCircle1200>
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
                </DivCircle1200>
            }
            {isTabletOrLaptop &&
                <DivCircle900>
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
                </DivCircle900>
            }
            {isTablet &&
                <Div768>
                    <DivCircle1200>
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
                    </DivCircle1200>
                </Div768>
            }
            {isBigPhone &&
                <Div481>
                    <DivCircle481>
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
                    </DivCircle481>
                </Div481>
            }
            {isPhone &&
                <Div481>
                    <DivCircle481>
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
                    </DivCircle481>
                </Div481>
            }
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
    right: -15%;
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
const DivCircle481 = styled.div`
    position:  absolute;
    top: 40;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    background-color: #00b6ff;
    width: 220px;
    height: 220px;
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
const DivCircle900 = styled.div`
    position:  absolute;
    top: 40;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    background-color: #00b6ff;
    width: 300px;
    height: 300px;
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
const DivCircle1200 = styled.div`
    position:  absolute;
    top: 100px;
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
const Div481 = styled.div`
    margin-top: 350px;
`
const Div768 = styled.div`
    margin-top: 250px;
`
const Div = styled.div`
    position: relative;
    width: 100%;
`

export default Skills