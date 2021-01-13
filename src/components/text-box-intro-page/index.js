import React from 'react'
import styled from 'styled-components'
import Delayed from '../../utils/delayed-component'


const TextBox = (props) => {
    return (
        <Div>
            <Delayed waitBeforeShow={2000}>
                <Paragraph>
                    To create cool things for others to use, you don't just need to know the way, you first need to be able to create them in your imagination!
                </Paragraph>
            </Delayed>
        </Div>
    )
}

const Div = styled.div`
    margin: 3% auto;
    width: 50%;
    height: 114px;
`

const Paragraph = styled.p`
    text-align: center;
    font-size: 2em;
    color: white;
    font-style: italic;
    margin: 0;
`

export default TextBox