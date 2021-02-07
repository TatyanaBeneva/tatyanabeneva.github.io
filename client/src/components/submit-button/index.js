import React from 'react'
import styled from 'styled-components'

const SubmitButton = ({title}) => {
    return (
        <div>
            <Button type="submit">{title}</Button>
        </div>
    )
}

const Button = styled.button`
    width: 70%;
    border: none;
    background-image: linear-gradient(to right, #24ece9, #af45da, #f934ea);
    font-size: 20px;
    padding: 10px;
    border-radius: 20px;
    color: white;
    margin-left: 10%;

    &:focus {
        outline: none;
    }

    &:hover {
        background-image: linear-gradient(to left, #24ece9, #af45da, #f934ea);
        cursor: pointer;
    }
`

export default SubmitButton