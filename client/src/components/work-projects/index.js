import React, { useContext } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom'
import Project from '../project'
import tutorials from './tutorials.png'
import shoe from './shoe.png'
import movies from './movies.png'
import LanguageContext from '../../Context'

const WorkProjects = () => {
    const { language, } = useContext(LanguageContext)
    const isLaptop = useMediaQuery({ minWidth: 768 })
    const isTablet = useMediaQuery({ maxWidth: 767 })

    const academy = ['Html', 'CSS', 'JavaScript', 'Handlebars', 'Express', 'node.js', 'MongoDB']
    const shoes = ['Html', 'CSS', 'JavaScript', 'Handlebars', 'Firebase']

    const name = {
        'EN': ["Cours Academy - Back-end", "Shoes shop - Front-end with templates", "Movies - Front-end with templates"],
        'BG': ["Академия за курсове", "Магазин за обувки", "Филмотека"]
    }

    const description = {
        'EN': ["This is web site where you can have acount, to enroll in a programming course of your choice, to create, modify and delete courses that you create.",
            "This is web site where you can have acount, by diferent shoes, create, modify and delete shoes offer that you create.",
            "This is web site where you can have acount, to create movies reviews, see other member reviews, modify and delete movies reviews that you create and like others."],
        'BG': ["Това е уеб сайт, където можеш да имаш акаунт, да записваш курсове по програмиране по твой избор, да създаваш, редактираш и изтроваш курсове, които ти си създал.",
            "Това е уеб сайт, където можеш да имаш акаунт, да купуваш различни обувки, да създаваш, редактираш и изтриваш оферти, които ти си създал.",
            "Това е уеб сайт, където можеш да имаш акаунт, да създаваш ревюта за филми, да гледаш и харесваш ревютата на другите, да редактираш и изтриваш създадените от теб ревюта."]
    }

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
                            name={name[language][0]}
                            description={description[language][0]}
                            href="https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Back-End/Exam-From-1-November"
                            image={tutorials}
                            technologies={academy}
                        />
                        <Project
                            name={name[language][1]}
                            description={description[language][1]}
                            href="https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Applications/Exam-Form-18-August-2020/ShoeShelf"
                            image={shoe}
                            technologies={shoes}
                        />
                        <Project
                            name={name[language][2]}
                            description={description[language][2]}
                            href="https://github.com/TatyanaBeneva/SoftUni-Courses/tree/master/Final%20Exam%20Preparation/JS-Applications/Exam-From-08-August-2020/Movies"
                            image={movies}
                            technologies={shoes}
                        />
                    </UlLaptop>
                    <Div>
                        <Button onClick={toContactPage}>{language==='EN' ? "Let's talk!" : "Свържи се с мен!"}</Button>
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