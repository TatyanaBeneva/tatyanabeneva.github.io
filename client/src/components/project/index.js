import React from 'react'
import styled from 'styled-components'
import Skill from '../skill'

const Porject = ({ name, description, href, image, technologies }) => {

    const renderTechnologies = (() => {
        return technologies.map((tech, index) => {
            return (
                <LiTech key={index}>
                    {tech}
                </LiTech>
            )
        })
    })

    return (
        <Li>
            <DivInfo>
                <Details>
                    Project details
                </Details>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <Details>
                    Used Technologies:
                </Details>
                <ul style={{ padding: 0 }}>
                    {renderTechnologies()}
                </ul>
                <a href={href}>
                    <Button>View Live Project</Button>
                </a>
            </DivInfo>
            <DivImage>
                <Image src={image} />
            </DivImage>
        </Li>
    )
}

const LiTech = styled.li`
    display: inline-block;
    margin-right: 5%;
    margin-bottom: 5%;
    width: auto;
    border-radius: 20px;
    background-color: white;
    padding: 2%;
    border: 2px solid #00b6ff;
    font-size: 1.5vw;
`

const Image = styled.img`
    width: 100%;
`

const Button = styled.button`
    border: 2px solid white;
    font-size: 1em;
    font-family: Jack, serif;
    padding: 10px 20px;
    border-radius: 25px;
    background-color: transparent;
    color: white;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #41f2b6;
        color: black;
        cursor: pointer;
    }
`

const Description = styled.p`
    color: white;
    font-size: 1.5vw;
    letter-spacing: 2px;
    margin-bottom: 40px;
`

const Name = styled.p`
    color: white;
    font-size: 3vw;
    margin: 0 30px 0 0;
`

const Details = styled.p`
    color: #00b6ff;
    font-size: 1.3vw;
    letter-spacing: 3px;
`

const DivInfo = styled.div`
    font-family: Jack, serif;
`
const DivImage = styled.div`

`

const Li = styled.li`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    margin-bottom: 50px;
`

export default Porject