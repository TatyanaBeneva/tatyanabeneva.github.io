import React, { useContext } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import LanguageContext from '../../Context'

const Porject = ({ name, description, href, image, technologies }) => {
    const { language, } = useContext(LanguageContext)
    const isLaptop = useMediaQuery({ minWidth: 768 })
    const isTablet = useMediaQuery({ maxWidth: 767 })

    const renderTechnologies = (() => {
        return technologies.map((tech, index) => {
            return (
                <span>
                    {isLaptop &&
                        <LiTechLaptop key={index}>
                            {tech}
                        </LiTechLaptop>
                    }
                    {isTablet &&
                        <LiTechTablet key={index}>
                            {tech}
                        </LiTechTablet>
                    }
                </span>
            )
        })
    })

    const text = {
        'EN': ["Project details", "Used Technologies:", "View Live Project"],
        'BG': ["Детайли за проекта", "Използвани технологии:", "Виж целия проект"]
    }

    return (
        <div>
            {isLaptop &&
                <div>
                    <LiLaptop>
                        <DivInfo>
                            <Details>
                                {text[language][0]}
                            </Details>
                            <Name>{name}</Name>
                            <Description>{description}</Description>
                            <Details>
                                {text[language][1]}
                            </Details>
                            <ul style={{ padding: 0 }}>
                                {renderTechnologies()}
                            </ul>
                            <a href={href}>
                                <Button>{text[language][2]}</Button>
                            </a>
                        </DivInfo>
                        <div>
                            <Image src={image} />
                        </div>
                    </LiLaptop>
                    <DivLine></DivLine>
                </div>
            }
            {isTablet &&
                <div>
                    <LiTablet>
                        <DivInfo>
                            <DetailsTablet>
                                {text[language][0]}
                            </DetailsTablet>
                            <NameTablet>{name}</NameTablet>
                            <DescriptionTablet>{description}</DescriptionTablet>
                            <DetailsTablet>
                                {text[language][1]}
                            </DetailsTablet>
                            <ul style={{ padding: 0 }}>
                                {renderTechnologies()}
                            </ul>
                        </DivInfo>
                        <div>
                            <Image src={image} style={{ marginBottom: '30px' }} />
                            <a href={href}>
                                <ButtonTablet>{text[language][2]}</ButtonTablet>
                            </a>
                        </div>
                    </LiTablet>
                    <DivLine></DivLine>
                </div>
            }
        </div>
    )
}

const DivLine = styled.div`
    width: 100%;
    border: 2px solid white;
`

const LiTechTablet = styled.li`
    display: inline-block;
    margin-right: 5%;
    margin-bottom: 5%;
    width: auto;
    border-radius: 20px;
    background-color: white;
    padding: 2%;
    border: 2px solid #00b6ff;
    font-size: 2.5vw;
`

const LiTechLaptop = styled.li`
    display: inline-block;
    margin-right: 5%;
    margin-bottom: 5%;
    width: auto;
    border-radius: 20px;
    background-color: white;
    padding: 2%;
    border: 2px solid #00b6ff;
    font-size: 1.5vw;
`

const Image = styled.img`
    width: 100%;
    margin-top: 5%;
`
const ButtonTablet = styled.button`
    border: 2px solid white;
    font-size: 2.5vw;
    font-family: Jack, serif;
    padding: 10px 20px;
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
    padding: 10px 20px;
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
const DescriptionTablet = styled.p`
    color: white;
    font-size: 3.5vw;
    letter-spacing: 2px;
    margin-bottom: 40px;
`
const Description = styled.p`
    color: white;
    font-size: 1.5vw;
    letter-spacing: 2px;
    margin-bottom: 40px;
`
const NameTablet = styled.p`
    color: white;
    font-size: 6.5vw;
    margin: 0 30px 0 0;
`

const Name = styled.p`
    color: white;
    font-size: 3vw;
    margin: 0 30px 0 0;
`
const DetailsTablet = styled.p`
    color: #00b6ff;
    font-size: 2.7vw;
    letter-spacing: 3px;
`
const Details = styled.p`
    color: #00b6ff;
    font-size: 1.3vw;
    letter-spacing: 3px;
`

const DivInfo = styled.div`
    font-family: Jack, serif;
`
const LiTablet = styled.li`
    display: block;
    width: 100%;
    margin-bottom: 50px;
`

const LiLaptop = styled.li`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    margin-bottom: 50px;
`

export default Porject