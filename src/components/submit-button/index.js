import React from 'react'
import styled from 'styled-components'

const SubmitButton = ({title, onClick}) => {
    return (
        <div>
            <Button type="submit" onClick={onClick}>{title}</Button>
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

    &:focus {
        outline: none;
    }
`

export default SubmitButton