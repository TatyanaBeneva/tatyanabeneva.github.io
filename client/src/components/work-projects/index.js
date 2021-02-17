import React from 'react'
import styled from 'styled-components'
import Porject from '../project'
import Project from '../project'

const WorkProjects = () => {
    return (
        <div>
            <Ul>
                <Project
                name="Cours Academy - Back-end"
                description="This is web site where you can have acount, to enroll in a programming course of your choice, to create, modify and delete courses that you create."
                href="https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Back-End/Exam-From-1-November"
                />
                <Porject
                name="Shoes shop - Front-end with templates"
                description="This is web site where you can have acount, by diferent shoes, create, modify and delete shoes offer that you create."
                href="https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Applications/Exam-Form-18-August-2020/ShoeShelf"
                />
                <Porject
                name="Movies - Front-end with templates"
                description="This is web site where you can have acount, to create movies reviews, see other member reviews, modify and delete movies reviews that you create and like others."
                href="https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Applications/Exam-From-08-August-2020/Movies"
                />
            </Ul>
        </div>
    )
}

const Ul = styled.ul`
    padding: 0;
    margin: 50px 100px;
`

export default WorkProjects