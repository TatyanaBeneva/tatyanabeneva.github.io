import React, { useContext, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import Link from '../link'
import Logo from '../logo'
import Icon from '../social-media-icons'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'
import LanguageButton from '../language-button'
import LanguageContext from '../../Context'

const NavBar = () => {
    const [isClick, setIsClick] = useState(false)
    const {language, } = useContext(LanguageContext)
    const isLaptop = useMediaQuery({ minWidth: 1200 })
    const isTabletOrLaptop = useMediaQuery({ minWidth: 900, maxWidth: 1199 })
    const isBigPhone = useMediaQuery({ minWidth: 481, maxWidth: 899 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    const currentRoute = useHistory().location.pathname.toLowerCase()

    const titles = {
        'EN': ['About me', 'My work', 'Contact me'],
        'BG': ['Повече за мен', 'Проекти', 'Свържи се с мен']
    }

    const handleClick = (e) => {
        e.preventDefault()
        setIsClick(!isClick)
    }

    return (
        <div>
            {isLaptop &&
                <Div>
                    <Logo />
                    <LanguageButton />
                    <Navigation>
                        <Link href={'/about'} title={titles[language][0]} type={currentRoute.includes('about') ? 'nav-active' : 'nav'} />
                        <Link href={'/work'} title={titles[language][1]} type={currentRoute.includes('work') ? 'nav-active' : 'nav'} />
                        <Link href={'/contact'} title={titles[language][2]} type={currentRoute.includes('contact') ? 'nav-active' : 'nav'} />
                        <span style={{ border: '1px solid lightgray', marginRight: '20px' }}></span>
                        <Icon link="https://www.linkedin.com/in/tatyana-beneva-8567b01b1" icon="fab fa-linkedin-in" />
                        <Icon link="https://www.facebook.com/tatjana.beneva.1/" icon="fab fa-facebook-f" />
                    </Navigation>
                </Div>
            }
            {isTabletOrLaptop &&
                <Div>
                    <Logo />
                    <LanguageButton />
                    <Navigation>
                        <Link href={'/about'} title={titles[language][0]} type={'nav'} />
                        <Link href={'/work'} title={titles[language][1]} type={'nav'} />
                        <Link href={'/contact'} title={titles[language][2]} type={'nav'} />
                        <span style={{ border: '1px solid lightgray', marginRight: '20px' }}></span>
                        <Icon link="https://www.linkedin.com/in/tatyana-beneva-8567b01b1" icon="fab fa-linkedin-in" />
                        <Icon link="https://www.facebook.com/tatjana.beneva.1/" icon="fab fa-facebook-f" />
                    </Navigation>
                </Div>
            }
            {isBigPhone &&
                <Div480>
                    <Logo />
                    <LanguageButton />
                    <span>
                        <Navigation>
                            <Button onClick={handleClick}>
                                <Span>Menu <i className="fas fa-bars"></i></Span>
                            </Button>
                        </Navigation>
                        {isClick ?
                            <Div481>
                                <Ul>
                                    <Li481>
                                        <Link href={'/about'} title={titles[language][0]} type={'nav'} />
                                    </Li481>
                                    <Li481>
                                        <Link href={'/work'} title={titles[language][1]} type={'nav'} />
                                    </Li481>
                                    <Li481>
                                        <Link href={'/contact'} title={titles[language][2]} type={'nav'} />
                                    </Li481>
                                </Ul>
                                <DivLine />
                                <Icon link="https://www.linkedin.com/in/tatyana-beneva-8567b01b1" icon="fab fa-linkedin-in" />
                                <Icon link="https://www.facebook.com/tatjana.beneva.1/" icon="fab fa-facebook-f" />
                            </Div481> : ''
                        }
                    </span>
                </Div480>
            }
            {isPhone &&
                <Div480>
                    <Logo />
                    <LanguageButton />
                    <span>
                        <Navigation>
                            <Button onClick={handleClick}>
                                <Span>Menu <i className="fas fa-bars"></i></Span>
                            </Button>
                        </Navigation>
                        {isClick ?
                            <Div481>
                                <ul>
                                    <Li481>
                                        <Link href={'/about'} title={titles[language][0]} type={'nav'} />
                                    </Li481>
                                    <Li481>
                                        <Link href={'/work'} title={titles[language][1]} type={'nav'} />
                                    </Li481>
                                    <Li481>
                                        <Link href={'/contact'} title={titles[language][2]} type={'nav'} />
                                    </Li481>
                                </ul>
                                <DivLine />
                                <Icon link="https://www.linkedin.com/in/tatyana-beneva-8567b01b1" icon="fab fa-linkedin-in" />
                                <Icon link="https://www.facebook.com/tatjana.beneva.1/" icon="fab fa-facebook-f" />
                            </Div481> : ''
                        }
                    </span>
                </Div480>
            }
        </div>
    )
}

const Ul = styled.ul`
    padding: 0;
    text-align: center;
`
const Li481 = styled.li`
    display: block;
    margin-bottom: 15px;
    width: 100%

`

const Span = styled.span`
    font-size: 20px;
    color: #00b6ff;
`

const Button = styled.button`
    background-color: transparent;
    border: none;
    
    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`

const DivLine = styled.div`
    border: 1px solid lightgray;
    margin-bottom: 20px;
`
const Div480 = styled.div`
    padding: 10px 20px;
    background-color: #373535;
`
const Div481 = styled.div`
    padding: 0 30px;
    background-color: #373535;
    text-align: center;
`

const Div = styled.div`
    padding: 10px 100px;
    background-color:  #373535;
`
const Navigation = styled.nav`
    float: right;
`

export default NavBar