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
                    technologies={'Html, CSS, JS, Handlebars, Express, node.js, MongoDB'}
                    image={tutorials}
                    link={"https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Back-End/Exam-From-1-November"}
                    />
                <List 
                    title={'Shoes shop - Front-end with templates'}
                    description={'This is web site where you can have acount, by diferent shoes, create, modify and delete shoes offer that you create.'}
                    technologies={'Html, CSS, JS, Handlebars, Firebase'}
                    image={shoe}
                    link={"https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Applications/Exam-Form-18-August-2020/ShoeShelf"}
                    />
                <List 
                    title={'Movies - Front-end with templates'}
                    description={'This is web site where you can have acount, to create movies reviews, see other member reviews, modify and delete movies reviews that you create and like others.'}
                    technologies={'Html, CSS, JS, Handlebars, Firebase'}
                    image={movies}
                    link={"https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Applications/Exam-From-08-August-2020/Movies"}
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
    padding: 0 1%;
    color: white;
`

const Div = styled.div`
    margin: 100px 170px 30px 170px;
`

export default Projects