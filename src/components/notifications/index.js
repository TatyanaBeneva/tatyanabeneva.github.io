import React from 'react'
import styled from 'styled-components'

const Notification = ({error}) => {
    return (
        <Div>
            <P>{error}</P>
        </Div>
    )
}

const Div = styled.div`

`

const P = styled.p`
    color: red;
`

export default Notification