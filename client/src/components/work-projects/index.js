import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import {useHistory} from 'react-router-dom'
import Project from '../project'
import tutorials from './tutorials.png'
import shoe from './shoe.png'
import movies from './movies.png'

const WorkProjects = () => {

    const isLaptop = useMediaQuery({ minWidth: 768 })
    const isTablet = useMediaQuery({ maxWidth: 767 })

    const academy = ['Html', 'CSS', 'JavaScript', 'Handlebars', 'Express', 'node.js', 'MongoDB']
    const shoes = ['Html', 'CSS', 'JavaScript', 'Handlebars', 'Firebase']

    const history = useHistory()

    const toContactPage = (e) => {
        e.preventDefault()
        history.push('/contact')
    }

    return (
        <div>
            {isLaptop &&
                <div>
                    <UlLaptop>
                        <Project
                            name="Cours Academy - Back-end"
                            description="This is web site where you can have acount, to enroll in a programming course of your choice, to create, modify and delete courses that you create."
                            href="https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Back-End/Exam-From-1-November"
                            image={tutorials}
                            technologies={academy}
                        />
                        <Project
                            name="Shoes shop - Front-end with templates"
                            description="This is web site where you can have acount, by diferent shoes, create, modify and delete shoes offer that you create."
                            href="https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Applications/Exam-Form-18-August-2020/ShoeShelf"
                            image={shoe}
                            technologies={shoes}
                        />
                        <Project
                            name="Movies - Front-end with templates"
                            description="This is web site where you can have acount, to create movies reviews, see other member reviews, modify and delete movies reviews that you create and like others."
                            href="https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Applications/Exam-From-08-August-2020/Movies"
                            image={movies}
                            technologies={shoes}
                        />
                    </UlLaptop>
                    <Div>
                        <Button onClick={toContactPage}>Let's talk!</Button>
                    </Div>
                </div>
            }
            {isTablet &&
                <div>
                    <UlTablet>
                        <Project
                            name="Cours Academy - Back-end"
                            description="This is web site where you can have acount, to enroll in a programming course of your choice, to create, modify and delete courses that you create."
                            href="https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Back-End/Exam-From-1-November"
                            image={tutorials}
                            technologies={academy}
                        />
                        <Project
                            name="Shoes shop - Front-end with templates"
                            description="This is web site where you can have acount, by diferent shoes, create, modify and delete shoes offer that you create."
                            href="https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Applications/Exam-Form-18-August-2020/ShoeShelf"
                            image={shoe}
                            technologies={shoes}
                        />
                        <Project
                            name="Movies - Front-end with templates"
                            description="This is web site where you can have acount, to create movies reviews, see other member reviews, modify and delete movies reviews that you create and like others."
                            href="https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Applications/Exam-From-08-August-2020/Movies"
                            image={movies}
                            technologies={shoes}
                        />
                    </UlTablet>
                    <Div>
                        <ButtonTablet onClick={toContactPage}>Let's talk!</ButtonTablet>
                    </Div>
                </div>
            }
        </div>
    )
}

const Div = styled.div`
    text-align: center;
    margin-bottom: 100px;
`
const ButtonTablet = styled.button`
    border: 2px solid white;
    font-size: 2.5vw;
    font-family: Jack, serif;
    padding: 10px 50px;
    border-radius: 25px;
    background-color: transparent;
    color: white;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #41f2b6;
        color: black;
        cursor: pointer;
    }
`
const Button = styled.button`
    border: 2px solid white;
    font-size: 1.3vw;
    font-family: Jack, serif;
    padding: 10px 50px;
    border-radius: 25px;
    background-color: transparent;
    color: white;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #41f2b6;
        color: black;
        cursor: pointer;
    }
`

const UlTablet = styled.ul`
    padding: 0;
    margin: 50px 20px;
`

const UlLaptop = styled.ul`
    padding: 0;
    margin: 50px 100px;
`

export default WorkProjects