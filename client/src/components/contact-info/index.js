import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import SharedIcons from '../share-list-icons'

const ContactInfo = () => {

    const isLaptop = useMediaQuery({ minWidth: 768 })
    const isTablet = useMediaQuery({ maxWidth: 767 })

    return (
        <div>
            {isLaptop &&
                <div>
                    <Heading>
                        Let's work together and I'll do my best!
                    </Heading>
                    <SharedIcons />
                </div>
            }
            {isTablet &&
                <div>
                    <HeadingTablet>
                        Let's work together and I'll do my best!
                    </HeadingTablet>
                </div>
            }
        </div>
    )
}

const HeadingTablet = styled.p`
    font-family: Jack, serif;
    color: white;
    font-size: 6.3vw;
    margin: 0 30px 100px 0;
`

const Heading = styled.p`
    font-family: Jack, serif;
    color: white;
    font-size: 3.5vw;
    margin: 50px 30px 100px 0;
`

export default ContactInfo