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
            <DivCircle />
            <DivCSS>
                <Skill icon="fab fa-css3-alt" text="CSS 3 Design" />
            </DivCSS>
            <DivHTML>
                <Skill icon="fab fa-html5" text="HTML 5 Architecture" />
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
        </Div>
    )
}

const DivGit = styled.div`
    position: absolute;
    bottom: 20%;
    left: 20%;
`
const DivReact = styled.div`
    position: absolute;
    bottom: 10%;
    right: 30%;
`

const DivNode = styled.div`
    position: absolute;
    top: 45%;
    left: 10%;
`

const DivJS = styled.div`
    position: absolute;
    right: 10%;
    bottom: 30%;
`

const DivHTML = styled.div`
    position: absolute;
    right: 10%;
    top: 35%;
`

const DivCSS = styled.div`
    position: absolute;
    top: 15%;
    left: 25%;
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
`

const Div = styled.div`
    position: relative;
    width: 100%;
`

export default Skills