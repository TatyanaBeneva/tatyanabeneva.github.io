import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import Link from '../link'
import Logo from '../logo'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'

const NavBar = () => {
    const [isClick, setIsClick] = useState(false)

    const isLaptop = useMediaQuery({ minWidth: 1200 })
    const isTabletOrLaptop = useMediaQuery({ minWidth: 768, maxWidth: 1199 })
    const isBigPhone = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    const handleClick = (e) => {
        e.preventDefault()
        setIsClick(!isClick)
    }

    return (
        <Div>
            <Logo />
            {isLaptop &&
                <Navigation1200>
                    <Link href={'/about'} title={'About me'} type={'nav'} />
                    <Link href={'/work'} title={'My work'} type={'nav'} />
                    <Link href={'/contact'} title={'Contact me'} type={'nav'} />
                </Navigation1200>
            }
            {isTabletOrLaptop &&
                <Navigation>
                    <Link href={'/about'} title={'About me'} type={'nav'} />
                    <Link href={'/work'} title={'My work'} type={'nav'} />
                    <Link href={'/contact'} title={'Contact me'} type={'nav'} />
                </Navigation>
            }
            {isBigPhone &&
                <span>
                    <Navigation>
                        <Button onClick={handleClick}>
                            <Span><i className="fas fa-align-justify"></i></Span>
                        </Button>
                    </Navigation>
                    {isClick ?
                        <Div481>
                            <Ul>
                                <Li481>
                                    <Link href={'/about'} title={'About me'} type={'nav'} />
                                </Li481>
                                <Li481>
                                    <Link href={'/work'} title={'My work'} type={'nav'} />
                                </Li481>
                                <Li481>
                                    <Link href={'/contact'} title={'Contact me'} type={'nav'} />
                                </Li481>
                            </Ul>
                        </Div481> : ''
                    }
                </span>
            }
            {isPhone &&
                <span>
                    <Navigation>
                        <Button onClick={handleClick}>
                            <Span><i className="fas fa-align-justify"></i></Span>
                        </Button>
                    </Navigation>
                    {isClick ?
                        <Div481>
                            <ul>
                                <Li481>
                                    <Link href={'/about'} title={'About me'} type={'nav'} />
                                </Li481>
                                <Li481>
                                    <Link href={'/work'} title={'My work'} type={'nav'} />
                                </Li481>
                                <Li481>
                                    <Link href={'/contact'} title={'Contact me'} type={'nav'} />
                                </Li481>
                            </ul>
                        </Div481> : ''
                    }
                </span>
            }
        </Div>
    )
}

const Ul = styled.ul`
    padding: 0;
    text-align: center;
`

const Div481 = styled.div`
    padding: 0 30px;
    background-color:  #34495e;
`
const Li481 = styled.li`
    display: block;
    margin-bottom: 15px;
    width: 100%

`

const Span = styled.span`
    font-size: 30px;
    color: #24ece9;
`

const Button = styled.button`
    background-color: transparent;
    border: none;
    
    &:hover {
        cursor: pointer;
    }
`

const Div = styled.div`
    padding: 20px 30px;
    background-color:  #34495e;
`
const Navigation = styled.nav`
    float: right;
`

const Navigation1200 = styled.nav`
    float: right;
    margin-right: 100px;
`

export default NavBar