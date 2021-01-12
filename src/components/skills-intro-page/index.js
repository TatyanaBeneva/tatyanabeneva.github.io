import React from 'react'
import styled from 'styled-components'
import First from './first'
import Second from './second'
import Third from './third'

const Skills = () => {
    return (
        <DivSkills>
            <Div>
                <First />
                <Second />
                <Third />
            </Div>
        </DivSkills>
    )
}

const DivSkills = styled.div`
    position: relative;
    width: 100%;

    div {
        width: 50%;
    }

    ul {
        padding-left: 0px;
    }

    li {
        position: relative;
        display: inline-block;
        height: auto;
    }
`
const Div = styled.div`
    margin: 0 auto;
    padding: 0px;
`

export default Skills