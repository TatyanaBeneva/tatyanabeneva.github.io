import React from 'react'
import styled from 'styled-components'

const SubmitButton = ({title, isLoading, language}) => {
    return (
        <Div>
            {isLoading ? 
                <Button type="submit" disabled={true}>{language==='EN' ? "Submiting..." : "Изпращане..."}</Button> :
                <Button type="submit" disabled={false}>{title}</Button>
            }
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
`

const Button = styled.button`
    width: 90%;
    border: none;
    background-image: linear-gradient(to right, #24ece9, #af45da, #f934ea);
    font-size: 20px;
    padding: 10px;
    border-radius: 20px;
    color: white;
    margin-left: 5%;

    &:focus {
        outline: none;
    }

    &:hover {
        background-image: linear-gradient(to left, #24ece9, #af45da, #f934ea);
        cursor: pointer;
    }
`

export default SubmitButton