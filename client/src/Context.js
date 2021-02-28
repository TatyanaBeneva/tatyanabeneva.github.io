import React from 'react'
import Cookies from 'universal-cookie'

let lang = ''
const cookie = new Cookies()

if(!cookie.get('x-lang')){
    lang = 'EN'
}else {
    lang = cookie.get('x-lang')
}

const LanguageContext = React.createContext({
    language: lang,
    setLanguage: () => { }
})

export default LanguageContext