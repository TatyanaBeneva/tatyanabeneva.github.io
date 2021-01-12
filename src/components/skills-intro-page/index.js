import React from 'react'
import styled from 'styled-components'
import Layout from './layout-first-second-skill'

const Skills = () => {
    return (
        <Div>
        <Layout>

        </Layout>
        </Div>
    )
}

const Div = styled.div`
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

export default Skills