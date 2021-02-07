import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import Delayed from '../../utils/delayed-component'

const TextBox = (props) => {

    const isLaptop = useMediaQuery({ minWidth: 1200, maxWidth: 1600 })
    const isTabletOrLaptop = useMediaQuery({ minWidth: 900, maxWidth: 1199 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 899 })
    const isBigPhone = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    return (
        <div>
            {isLaptop &&
                <Div1200>
                    <Delayed waitBeforeShow={2000}>
                        <Paragraph1200>
                            To create cool things for others to use, you don't just need to know the way, you first need to be able to create them in your imagination!
                        </Paragraph1200>
                    </Delayed>
                </Div1200>
            }
            {isTabletOrLaptop &&
                <Div900>
                    <Delayed waitBeforeShow={2000}>
                        <Paragraph1200>
                            To create cool things for others to use, you don't just need to know the way, you first need to be able to create them in your imagination!
                        </Paragraph1200>
                    </Delayed>
                </Div900>
            }
            {isTablet &&
                <Div768>
                    <Delayed waitBeforeShow={2000}>
                        <Paragraph1200>
                            To create cool things for others to use, you don't just need to know the way, you first need to be able to create them in your imagination!
                        </Paragraph1200>
                    </Delayed>
                </Div768>
            }
            {isBigPhone &&
                <Div768>
                    <Delayed waitBeforeShow={2000}>
                        <Paragraph481>
                            To create cool things for others to use, you don't just need to know the way, you first need to be able to create them in your imagination!
                        </Paragraph481>
                    </Delayed>
                </Div768>
            }
            {isPhone &&
                <Div480>
                    <Delayed waitBeforeShow={2000}>
                        <Paragraph480>
                            To create cool things for others to use, you don't just need to know the way, you first need to be able to create them in your imagination!
                        </Paragraph480>
                    </Delayed>
                </Div480>
            }
        </div>
    )
}

const Div480 = styled.div`
    margin: 3% auto;
    width: 100%;
    height: 70px;
`
const Paragraph480 = styled.p`
    text-align: center;
    font-size: 15px;
    color: white;
    font-style: italic;
    margin: 0;
`
const Paragraph481 = styled.p`
    text-align: center;
    font-size: 25px;
    color: white;
    font-style: italic;
    margin: 0;
`
const Div768 = styled.div`
    margin: 3% auto;
    width: 100%;
    height: 114px;
`
const Div900 = styled.div`
    margin: 3% auto;
    width: 80%;
    height: 114px;
`
const Div1200 = styled.div`
    margin: 3% auto;
    width: 50%;
    height: 114px;
`
const Paragraph1200 = styled.p`
    text-align: center;
    font-size: 2em;
    color: white;
    font-style: italic;
    margin: 0;
`

export default TextBox