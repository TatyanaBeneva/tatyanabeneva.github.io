import React from 'react'
import styled from 'styled-components'

const Skill = ({ icon, text }) => {

    return (
        <Div>
            <DivIcon>
                <i className={icon}></i>
            </DivIcon>
            <DivText>
                {text}
            </DivText>
        </Div>
    )
}

const DivText = styled.div`
    color: black;
    font-size: 20px;
    margin: 7.5px 10px;
    font-family: Jack, serif;
`

const DivIcon = styled.div`
    text-align: center;
    font-size: 30px;
    background-color: #00b6ff;
    color: white;
    width: 40px;
    height: 30px;
    border-radius: 50%;
    padding: 5px 0;
`

const Div = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    width: auto;
    height: 40px;
    border-radius: 25px;
    background-color: white;
    padding: 5px;
`

export default Skill