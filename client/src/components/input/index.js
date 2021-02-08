import React from 'react'
import styled from 'styled-components'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'

const Input = ({ label, placeholder, onChange, type, icon, name, value, isError }) => {

    return (
        <div>
            <Label htmlFor={name}>
                {label}:
            </Label>
            <div>
                <Span>
                    <i className={icon}></i>
                </Span>
                {isError ? 
                    <InputError type={type || 'text'} name={name} value={value} placeholder={placeholder} onChange={onChange} /> : 
                    <InputForm type={type || 'text'} name={name} value={value} placeholder={placeholder} onChange={onChange} />}
            </div>
        </div>
    )
}

const InputError = styled.input`
    width: 90%;
    border: none;
    border-bottom: 2px solid red;
    padding-left: 30px;
    margin-top: 20px;
    font-size: 20px;

    &:focus {
        outline: none;
    }
`

const Span = styled.span`
    position: absolute;
    padding-top: 20px;
    color: gray;
    font-size: 20px;
`

const InputForm = styled.input`
    width: 90%;
    border: none;
    border-bottom: 2px solid black;
    padding-left: 30px;
    margin-bottom: 30px;
    margin-top: 20px;
    font-size: 20px;

    &:focus {
        outline: none;
        border-bottom: 5px solid #3fc1a9;
    }
`

const Label = styled.label`
    font-style: italic;
    font-size: 20px;
    color: #3fc1a9;
`

export default Input