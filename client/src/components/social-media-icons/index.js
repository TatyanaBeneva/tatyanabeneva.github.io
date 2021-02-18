import React from 'react'
import styled from 'styled-components'

const Icon = ({ icon, link, onClick, color }) => {
    return (
        <Li>
            <Link href={link} onClick={onClick}>
                <i className={icon}></i>
            </Link>
        </Li>
    )
}
const Link = styled.a`
    text-decoration: none;
    color: white;
    font-size: 20px;
`

const Li = styled.li`
    display: inline-block;
    margin: 0 10px;
`

export default Icon