import React from 'react'
import styled from 'styled-components'
import List from '../list'
import tutorials from './tutorials.png'
import shoe from './shoe.png'
import movies from './movies.png'

const Projects = () => {
    return (
        <Div>
            <Ul>
                <List 
                    title={'Cours Academy - Back-end'} 
                    description={'This is web site where you can have acount, to enroll in a programming course of your choice, to create, modify and delete courses that you create.'}
                    technologies={'Html, CSS, JS, Handlebars, Express, node.js'}
                    image={tutorials}
                    />
                <List 
                    title={'Shoes shop - Front-end with templates'}
                    description={'This is web site where you can have acount, by diferent shoes, create, modify and delete shoes offer that you create.'}
                    technologies={'Html, CSS, JS, Handlebars'}
                    image={shoe}
                    />
                <List 
                    title={'Movies - Front-end with templates'}
                    description={'This is web site where you can have acount, to create movies reviews, see other member reviews, modify and delete movies reviews that you create and like others.'}
                    technologies={'Html, CSS, JS, Handlebars'}
                    image={movies}
                    />
            </Ul>
        </Div>
    )
}

const Ul = styled.ul`
    display: grid;
    grid-template-columns: 32% 32% 32%;
    grid-column-gap: 2%;
    text-align: center;
    padding: 0;

    li {
        display: inline-block;
    }
`

const Div = styled.div`
    border: 2px solid black;
    margin: 100px 170px 30px 170px;
`

export default Projects