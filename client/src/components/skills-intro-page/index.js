import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import First from './first'
import Second from './second'
import Third from './third'

const Skills = () => {

    const isLaptop = useMediaQuery({ minWidth: 1200 })
    const isTabletOrLaptop = useMediaQuery({ minWidth: 900, maxWidth: 1199 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 899 })
    const isBigPhone = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    return (
        <DivSkills>
            {isLaptop &&
                <Div1200>
                    <First />
                    <Second />
                    <Third />
                </Div1200>
            }
            {isTabletOrLaptop &&
                <Div900>
                    <First />
                    <Second />
                    <Third />
                </Div900>
            }
            {isTablet &&
                <Div900>
                    <First />
                    <Second />
                    <Third />
                </Div900>
            }
            {isBigPhone &&
                <Div480>
                    <First />
                    <Second />
                    <Third />
                </Div480>
            }
            {isPhone &&
                <Div480>
                    <First />
                    <Second />
                    <Third />
                </Div480>
            }
        </DivSkills>
    )
}

const Div480 = styled.div`
    margin: 0 auto;
    padding: 0px;
    width: 100%;

    ul {
        padding-left: 0px;
    }

    li {
        position: relative;
        display: inline-block;
        height: auto;
    }
`

const Div900 = styled.div`
    margin: 0 auto;
    padding: 0px;
    width: 70%;

    ul {
        padding-left: 0px;
    }

    li {
        position: relative;
        display: inline-block;
        height: auto;
    }
`
const DivSkills = styled.div`
    position: relative;
    width: 100%;
`
const Div1200 = styled.div`
    margin: 0 auto;
    padding: 0px;
    width: 50%;

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