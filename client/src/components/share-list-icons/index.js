import React from 'react'
import styled from 'styled-components'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'
import { useMediaQuery } from 'react-responsive'

const SharedIcons = () => {

    const isLaptop = useMediaQuery({ minWidth: 768 })
    const isTablet = useMediaQuery({ maxWidth: 767 })

    return (
        <div>
            {isLaptop &&
                <div>
                    <Ul>
                        <Li>
                            <i className="fas fa-at" style={{ color: '#00b6ff', fontSize: '3vw' }}></i>
                        </Li>
                        <Li>
                            tatyana.v.beneva@gmail.com
                        </Li>
                    </Ul>
                    <Ul>
                        <Li>
                            <i className="fas fa-share-alt" style={{ color: '#00b6ff', fontSize: '3vw' }}></i>
                        </Li>
                        <Li>
                            <Link href="https://www.facebook.com/tatjana.beneva.1/">
                                <i className="fab fa-facebook"></i>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="https://www.linkedin.com/in/tatyana-beneva-8567b01b1">
                                <i className="fab fa-linkedin"></i>
                            </Link>
                        </Li>
                    </Ul>
                </div>
            }
            {isTablet &&
                <div style={{marginTop: '100px', marginBottom: '100px'}}>
                    <Ul>
                        <LiTablet>
                            <i className="fas fa-at" style={{ color: '#00b6ff', fontSize: '6vw' }}></i>
                        </LiTablet>
                        <LiTablet>
                            tatyana.v.beneva@gmail.com
                        </LiTablet>
                    </Ul>
                    <Ul>
                        <LiTablet>
                            <i className="fas fa-share-alt" style={{ color: '#00b6ff', fontSize: '6vw' }}></i>
                        </LiTablet>
                        <LiTablet>
                            <LinkTablet href="https://www.facebook.com/tatjana.beneva.1/">
                                <i className="fab fa-facebook"></i>
                            </LinkTablet>
                        </LiTablet>
                        <LiTablet>
                            <LinkTablet href="https://www.linkedin.com/in/tatyana-beneva-8567b01b1">
                                <i className="fab fa-linkedin"></i>
                            </LinkTablet>
                        </LiTablet>
                    </Ul>
                </div>
            }
        </div>
    )
}

const Ul = styled.ul`
    padding: 0;
    margin-bottom: 30px;
`

const LinkTablet = styled.a`
    text-decoration: none;
    color: white;
    font-size: 5vw;
`
const Link = styled.a`
    text-decoration: none;
    color: white;
    font-size: 2.5vw;
`

const LiTablet = styled.li`
    display: inline-block;
    margin: 0 10px;
    color: white;
    font-family: Jack, serif;
    font-size: 3vw;
`

const Li = styled.li`
    display: inline-block;
    margin: 0 10px;
    color: white;
    font-family: Jack, serif;
    font-size: 1.5vw;
`

export default SharedIcons