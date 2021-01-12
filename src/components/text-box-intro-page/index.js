import React from 'react'
import styled from 'styled-components'


const TextBox = () => {
    return (
        <Div>
            <Paragraph>
            To create cool things for others to use, you don't just need to know the way, you first need to be able to create them in your imagination!
            </Paragraph>
        </Div>
    )
}

const Div = styled.div`
    margin: 3% auto;
    width: 50%;
`

const Paragraph = styled.p`
    text-align: center;
    font-size: 2em;
    color: white;
    font-style: italic;
    margin: 0;
`

export default TextBox