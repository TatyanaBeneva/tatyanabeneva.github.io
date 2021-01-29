import React from 'react'
import styled from 'styled-components'
import Link from '../link'

const NavBar = () => {
    return (
        <Navigation>
            <Link href={'/about'} title={'About me'} />
            <Link href={'/contact'} title={'Contact me'} />
            <Link href={'/work'} title={'My work'} />
        </Navigation>
    )
}

const Navigation = styled.nav`
    float: right;
`

export default NavBar