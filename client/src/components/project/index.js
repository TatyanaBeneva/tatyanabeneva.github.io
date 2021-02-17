import React from 'react'
import styled from 'styled-components'

const Porject = ({name, description, href}) => {
    return (
        <Li>
            <DivInfo>
                <Details>
                    Project details
                </Details>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <a href={href}>
                    <Button>View Live Project</Button>
                </a>
            </DivInfo>
            <DivImage>

            </DivImage>
        </Li>
    )
}

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
    margin-bottom: 100px;
`

export default Porject