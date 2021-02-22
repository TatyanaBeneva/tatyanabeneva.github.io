import React from 'react'
import styled from 'styled-components'
import {useMediaQuery} from 'react-responsive'

const Skill = ({ icon, text }) => {
    const isLaptop = useMediaQuery({ minWidth: 481 })
    const isPhone = useMediaQuery({ maxWidth: 480 })
    return (
        <div>
            {isLaptop &&
                <Div>
                    <DivIcon>
                        <i className={icon}></i>
                    </DivIcon>
                    <DivText>
                        {text}
                    </DivText>
                </Div>
            }
            {isPhone &&
                <DivPhone>
                    <DivIconPhone>
                        <i className={icon}></i>
                    </DivIconPhone>
                    <DivTextPhone>
                        {text}
                    </DivTextPhone>
                </DivPhone>
            }
        </div>
    )
}

const DivTextPhone = styled.div`
    color: black;
    font-size: 15px;
    margin: 7.5px 10px;
    font-family: Jack, serif;
`

const DivText = styled.div`
    color: black;
    font-size: 20px;
    margin: 7.5px 10px;
    font-family: Jack, serif;
`
const DivIconPhone = styled.div`
    text-align: center;
    font-size: 20px;
    background-color: #00b6ff;
    color: white;
    width: 30px;
    height: 20px;
    border-radius: 50%;
    padding: 5px 0;
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
const DivPhone = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    width: auto;
    height: 30px;
    border-radius: 25px;
    background-color: white;
    padding: 2.5px;
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