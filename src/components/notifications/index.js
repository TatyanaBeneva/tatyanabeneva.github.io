import React from 'react'
import styled from 'styled-components'

const Notification = ({error}) => {
    return (
        <Div>
            <p>{error}</p>
        </Div>
    )
}

const Div = styled.div`
    color: red;
`

export default Notification