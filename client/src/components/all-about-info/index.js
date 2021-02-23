import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import LanguageContext from '../../Context'

const AllInfo = () => {
    const { language, } = useContext(LanguageContext)
    const isLaptop = useMediaQuery({ minWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const isPhone = useMediaQuery({ maxWidth: 480 })

    const history = useHistory();

    const toWorkPage = (e) => {
        e.preventDefault()
        history.push('/work')
    }

    const toContactPage = (e) => {
        e.preventDefault()
        history.push('/contact')
    }

    const headings = {
        'EN': ['Before', 'After', 'Now'],
        'BG': ['Преди', 'След', 'Сега']
    }

    const description = {
        'EN': ["I have bachelore degree in Finance, but I felt that this wasn't something I wanted to do all my life and soon after I graduated I started learning programming, because I remembered how much I liked and was inspired by the school hours when we studied just basic html. So my journey into the world of programming started!",
            "Of course I started with Html and CSS. Then came the turn of JavaScript and with that I had to choose which framework to work with. So i did a little research of my own and chose React as a start. Where did I study these technologies? I took the following courses at SoftUni University:",
            "During this time I was able to read some good books:",
            "My experience includes following technologies: HTML, CSS, SASS, JS, Node JS, React, Express JS, Mongo DB, Firebase, GitHub, REST, C#, Unit testing. I'm currently taking courses of graphic design and UI web design. My moto is 'never stop learning'. At the moment I do not have much experience, but I have a great passion and desire to learn and grow."],
        'BG': ["Имам бакалавърска диплома по Финанси, но почувствах че това не е нещото, с което искам да се занимавам цял живот и скоро след като завърших, започнах да уча програмиране, защото си спомних колко много ми хареса и се бях вдъхновила от училищните часове, когато учихме един обикновен html. И така приключението ми в света на програмирането започна!",
            "Разбира се започнах с Html и CSS. След това дойде ред на JavaScript и с това трябваше да избирам с кой framework ще работя. Затова си направих едно лично проучване и след всичко прочетено реших да започна с React като начало. Къде учих тези технологии? Харесах дигиталната система за обучение на Университета SoftUni и изкарах следните курсове там:",
            "През това време успях да прочета и някои добри книги:",
            "Опитът ми включва следните технологии: HTML, CSS, SASS, JS, Node JS, React, Express JS, Mongo DB, Firebase, GitHub, REST, C#, Unit testing. Вмомента също вземам курсове, но те са по насочени към график и UI дизайна. Моето мото е 'никога не спирай да се учиш'. На този етап нямам много опит, но имам огромна страст и желание да се уча и раста."]
    }

    const books = {
        'EN': ["HTML 5 & CSS 3. Practical programming",
            "Basics of programming with JavaScript",
            "Principles of programming with C#",
            "You don’t know JS – series books",
            "Many books on self-improvement"],
        'BG': ["HTML 5 & CSS 3. Практическо програмиране",
            "Основи на програмирането с JavaScript",
            "Принципи на програмирането със C#",
            "Ти не знаеш JS – серия книги",
            "Много книги за самоусъвършенстване"]
    }

    return (
        <div>
            {isLaptop &&
                <Div>
                    <ul style={{ padding: 0, fontSize: '1.4vw' }}>
                        <Li id="before">
                            <H1>{headings[language][0]}</H1>
                            <P>
                                {description[language][0]}
                            </P>
                        </Li>
                        <Li id="after">
                            <H1>{headings[language][1]}</H1>
                            <P>
                                {description[language][1]}
                            </P>
                            <ul style={{ padding: '2.5%' }}>
                                <li>HTML/CSS</li>
                                <li>JavaScript Basics</li>
                                <li>JavaScript Advanced</li>
                                <li>JavaScript Applications</li>
                                <li>JavaScript Back-End</li>
                                <li>React JS</li>
                                <li>C# Fundamentals</li>
                            </ul>
                            <P>
                                {description[language][2]}
                            </P>
                            <ul style={{ padding: '2.5%' }}>
                                <li>{books[language][0]}</li>
                                <li>{books[language][1]}</li>
                                <li>{books[language][2]}</li>
                                <li>{books[language][3]}</li>
                                <li>{books[language][4]}</li>
                            </ul>
                        </Li>
                        <Li id="now">
                            <H1>{headings[language][2]}</H1>
                            <P>
                                {description[language][3]}
                            </P>
                        </Li>
                    </ul>
                    <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                        <Button900 onClick={toWorkPage}>View my work</Button900>
                        <Button900 onClick={toContactPage}>Let's talk!</Button900>
                    </div>
                </Div>
            }
            {isTablet &&
                <DivTablet>
                    <ul style={{ padding: 0, fontSize: '3.5vw' }}>
                        <Li id="before">
                            <H1>{headings[language][0]}</H1>
                            <PTablet>
                                {description[language][0]}
                            </PTablet>
                        </Li>
                        <Li id="after">
                            <H1>{headings[language][1]}</H1>
                            <PTablet>
                                {description[language][1]}
                            </PTablet>
                            <ul style={{ padding: '2.5%' }}>
                                <li>HTML/CSS</li>
                                <li>JavaScript Basics</li>
                                <li>JavaScript Advanced</li>
                                <li>JavaScript Applications</li>
                                <li>JavaScript Back-End</li>
                                <li>React JS</li>
                                <li>C# Fundamentals</li>
                            </ul>
                            <PTablet>
                                {description[language][2]}
                            </PTablet>
                            <ul style={{ padding: '2.5%' }}>
                                <li>{books[language][0]}</li>
                                <li>{books[language][1]}</li>
                                <li>{books[language][2]}</li>
                                <li>{books[language][3]}</li>
                                <li>{books[language][4]}</li>
                            </ul>
                        </Li>
                        <Li id="now">
                            <H1>{headings[language][2]}</H1>
                            <PTablet>
                                {description[language][3]}
                            </PTablet>
                        </Li>
                    </ul>
                    <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                        <Button900 onClick={toWorkPage}>View my work</Button900>
                        <Button900 onClick={toContactPage}>Let's talk!</Button900>
                    </div>
                </DivTablet>
            }
            {isPhone &&
                <DivTablet>
                    <ul style={{ padding: 0, fontSize: '3.5vw' }}>
                        <Li id="before">
                            <H1>{headings[language][0]}</H1>
                            <PTablet>
                                {description[language][0]}
                            </PTablet>
                        </Li>
                        <Li id="after">
                            <H1>{headings[language][1]}</H1>
                            <PTablet>
                                {description[language][1]}
                            </PTablet>
                            <ul style={{ padding: '2.5%' }}>
                                <li>HTML/CSS</li>
                                <li>JavaScript Basics</li>
                                <li>JavaScript Advanced</li>
                                <li>JavaScript Applications</li>
                                <li>JavaScript Back-End</li>
                                <li>React JS</li>
                                <li>C# Fundamentals</li>
                            </ul>
                            <PTablet>
                                {description[language][2]}
                            </PTablet>
                            <ul style={{ padding: '2.5%' }}>
                                <li>{books[language][0]}</li>
                                <li>{books[language][1]}</li>
                                <li>{books[language][2]}</li>
                                <li>{books[language][3]}</li>
                                <li>{books[language][4]}</li>
                            </ul>
                        </Li>
                        <Li id="now">
                            <H1>{headings[language][2]}</H1>
                            <PTablet>
                                {description[language][3]}
                            </PTablet>
                        </Li>
                    </ul>
                    <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                        <Button900 onClick={toWorkPage}>View my work</Button900>
                        <Button900 onClick={toContactPage}>Let's talk!</Button900>
                    </div>
                </DivTablet>
            }
        </div>
    )
}

const H1 = styled.h1`
    color: #00b6ff;
`

const Button900 = styled.button`
    border: 2px solid white;
    font-size: 1em;
    font-family: Jack, serif;
    padding: 10px 20px;
    border-radius: 25px;
    color: white;
    background-color: transparent;
    margin-right: 15px;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #41f2b6;
        color: black;
        cursor: pointer;
    }
`
const PTablet = styled.p`
    font-size: 3.5vw;
`

const P = styled.p`
    font-size: 1.4vw;
`

const Li = styled.li`
    display: block;
    background-color: lightgray;
    font-family: Jack, serif;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
`
const DivTablet = styled.div`
    width: 90%;
    margin: 0 auto;
`

const Div = styled.div`
    width: 60%;
    margin: 0 auto;
`

export default AllInfo