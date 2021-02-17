import React from 'react'
import styled from 'styled-components'
import NavBar from '../../components/nav-bar'
import Footer from '../../components/footer'
import WorkProjects from '../../components/work-projects'

const MyWorkPage = () => {
    return (
        <div>
            <DivBackground>
                <NavBar />
                <WorkProjects />
                <Footer />
            </DivBackground>
        </div>
    )
}

const DivBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 2100px;
    width: 100%;
    padding: 0;
    background-color: black;
`

export default MyWorkPage