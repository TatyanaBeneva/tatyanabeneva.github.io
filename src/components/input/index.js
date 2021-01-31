import React from 'react'
import styled from 'styled-components'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'

const Input = ({ label, id, placeholder, onChange, type, icon }) => {
    return (
        <div>
            <Label htmlFor={id}>
                {label}:
            </Label>
            <div>
                <Span>
                    <i className={icon}></i>
                </Span>
                <InputForm type={type || 'text'} id={id} placeholder={placeholder} onChange={onChange} />
            </div>
        </div>
    )
}

const Span = styled.span`
    position: absolute;
    padding-top: 20px;
    color: gray;
`

const InputForm = styled.input`
    width: 70%;
    border: none;
    border-bottom: 2px solid black;
    padding-left: 20px;
    margin-bottom: 30px;
    margin-top: 20px;

    &:focus {
        outline: none;
        border-bottom: 5px solid #3fc1a9;
    }
`

const Label = styled.label`
    font-style: italic;
`

export default Input