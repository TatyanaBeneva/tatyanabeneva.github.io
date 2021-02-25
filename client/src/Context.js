import React from 'react'
import Cookies from 'universal-cookie'

const cookie = new Cookies()
let lang = cookie.get('x-lang') 

const LanguageContext = React.createContext({
    language: lang,
    setLanguage: () => { }
})

export default LanguageContext