import React from 'react'
import styled from 'styled-components'
import Link from '../link'

const NavBar = () => {
    return (
        <Navigation>
            <Link href={'/about'} title={'About me'} type={'nav'} />
            <Link href={'/work'} title={'My work'}  type={'nav'}/>
            <Link href={'/contact'} title={'Contact me'}  type={'nav'}/>
        </Navigation>
    )
}

const Navigation = styled.nav`
    float: right;
`

export default NavBar