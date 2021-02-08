import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import List from '../list'
import tutorials from './tutorials.png'
import shoe from './shoe.png'
import movies from './movies.png'

const Projects = () => {

    const isLaptop = useMediaQuery({ minWidth: 1200 })
    const isTabletOrLaptop = useMediaQuery({ minWidth: 900, maxWidth: 1199 })
    const isTablet = useMediaQuery({ minWidth: 740, maxWidth: 899 })
    const isBigPhone = useMediaQuery({ minWidth: 500, maxWidth: 739 })
    const isPhone = useMediaQuery({ maxWidth: 499 })

    return (
        <div>
            {isLaptop &&
                <DivLaptop>
                    <UlLaptop>
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
                    </UlLaptop>
                </DivLaptop>
            }
            {isTabletOrLaptop &&
                <Div900>
                    <UlLaptop>
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
                    </UlLaptop>
                </Div900>
            }
            {isTablet &&
                <Div900>
                    <UlTablet>
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
                    </UlTablet>
                </Div900>
            }
            {isBigPhone &&
                <Div900>
                    <UlBigPhone>
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
                    </UlBigPhone>
                </Div900>
            }
            {isPhone &&
                <Div900>
                    <UlPhone>
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
                    </UlPhone>
                </Div900>
            }
        </div>
    )
}
const UlPhone = styled.ul`
    text-align: center;
    color: white;
    font-style: italic;
`

const UlBigPhone = styled.ul`
    text-align: center;
    color: white;
    font-style: italic;
    margin: 0 15%;
`

const UlTablet = styled.ul`
    text-align: center;
    color: white;
    font-style: italic;
    margin: 0 25%;
`

const UlLaptop = styled.ul`
    display: grid;
    grid-template-columns: 32% 32% 32%;
    grid-column-gap: 2%;
    text-align: center;
    padding: 0 1%;
    color: white;
    font-style: italic;
`

const Div900 = styled.div`
    margin: 80px 30px 30px 30px;
    margin-bottom: 100px;
`

const DivLaptop = styled.div`
    margin: 80px 170px 30px 170px;
`

export default Projects