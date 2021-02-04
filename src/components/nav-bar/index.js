import React from 'react'
import styled from 'styled-components'
import Link from '../link'
import Logo from '../logo'

const NavBar = () => {
    return (
        <Div>
            <Logo />
            <Navigation>
                <Link href={'/about'} title={'About me'} type={'nav'} />
                <Link href={'/work'} title={'My work'}  type={'nav'}/>
                <Link href={'/contact'} title={'Contact me'}  type={'nav'}/>
            </Navigation>
        </Div>        
    )
}

const Div = styled.div`
    padding: 20px 30px;
    background-color:  #34495e;
`

const Navigation = styled.nav`
    float: right;
    margin-right: 100px;
`

export default NavBar