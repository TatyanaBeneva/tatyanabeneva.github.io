import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import image from '../../pages/intro-page/comp.jpg'

const Buttons = () => {
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const hideMenu = () => {
        setIsMenuClicked(false)
    }

    const showMenu = () => {
        setIsMenuClicked(true)
    }

    return (
        <div>
            {isMenuClicked ?
                <DivImage style={{ backgroundImage: `url(${image})` }}>
                    <Div>
                        <ButtonMenu onClick={hideMenu}>Menu</ButtonMenu>
                    </Div>
                </DivImage>
                :
                <Div>
                    <Button onClick={showMenu}>Menu</Button>
                </Div>}
        </div>
    )
}

const DivImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding: 0;
    background-size: cover;
    background-repeat: no-repeat;
`

const Div = styled.div`
    width: 100%;
    text-align: center;
`

const ButtonMenu = styled.button`
    background-color: yellow;
    color: green;
    border: 3px solid green;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    font-size: 20px;
    margin-top: 20%;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
        background-color: green;
        color: yellow;
        border: 3px solid yellow;
    }

`

const Button = styled.button`
    background-color: yellow;
    color: green;
    border: 3px solid green;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    font-size: 20px;
    margin-top: 25px;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
        background-color: green;
        color: yellow;
        border: 3px solid yellow;
    }

`

export default Buttons