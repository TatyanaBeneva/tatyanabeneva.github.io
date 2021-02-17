import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import Project from '../project'
import tutorials from './tutorials.png'
import shoe from './shoe.png'
import movies from './movies.png'

const WorkProjects = () => {

    const isLaptop = useMediaQuery({ minWidth: 768 })
    const isTablet = useMediaQuery({ maxWidth: 767 })

    const academy = ['Html', 'CSS', 'JavaScript', 'Handlebars', 'Express', 'node.js', 'MongoDB']
    const shoes = ['Html', 'CSS', 'JavaScript', 'Handlebars', 'Firebase']

    return (
        <div>
            {isLaptop &&
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
            }
            {isTablet &&
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
            }
        </div>
    )
}

const UlTablet = styled.ul`
    padding: 0;
    margin: 50px 20px;
`

const UlLaptop = styled.ul`
    padding: 0;
    margin: 50px 100px;
`

export default WorkProjects