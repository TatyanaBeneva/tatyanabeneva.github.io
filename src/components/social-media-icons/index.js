import React from 'react'
import styled from 'styled-components'
import '../../fontawesome/fontawesome-free-5.15.2-web/css/all.min.css'

const Icon = ({ icon, link }) => {
    return (
        <Li>
            <DivIcon>
                <Link href={link}>
                    <i className={icon}></i>
                </Link>
            </DivIcon>
        </Li>
    )
}
const Link = styled.a`
    text-decoration: none;
    color: white;
`

const DivIcon = styled.div`
    background-color: #5267db;
    font-size: 25px;
    border-radius: 50%;
    width: 40px;
    text-align: center;
    padding: 7.5px 0;
`

const Li = styled.li`
    display: inline-block;
    margin: 0 15px;;
`

export default Icon