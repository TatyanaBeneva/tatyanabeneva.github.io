import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const FooterComponent = () => {

    const isTabletOrLaptop = useMediaQuery({ minWidth: 600 })
    const isPhone = useMediaQuery({ maxWidth: 599 })

    return (
        <div>
            {isTabletOrLaptop &&
                <DivLaptop>
                    <footer>
                        Designed & Build by Tatyana Beneva
                    </footer>
                </DivLaptop>
            }
            {isPhone &&
                <DivPhone>
                    <footer>
                        Designed & Build by Tatyana Beneva
                    </footer>
                </DivPhone>
            }
        </div>
    )
}

const DivPhone = styled.div`
    width: 100%;
    background-color:  #34495e;
    position: fixed;
    bottom: 0;
    font-size: 10px;
    color: white;
    padding: 10px;
    text-align: center;
`

const DivLaptop = styled.div`
    width: 100%;
    background-color:  #34495e;
    position: fixed;
    bottom: 0;
    font-size: 15px;
    color: white;
    padding: 10px;
    text-align: center;
`

export default FooterComponent