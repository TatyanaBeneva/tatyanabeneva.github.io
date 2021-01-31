import React from 'react'
import styled from 'styled-components'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'

const Icon = ({icon}) => {
    return (
        <Div>
            <Span>
            <i className={icon}></i>
            </Span>
        </Div>
    )
}

const Span = styled.span`
    color: white;
    background-color: #5267db;
    font-size: 25px;
    padding: 10px 15px;
    border-radius: 50%;
`

const Div = styled.div`
    
`

export default Icon