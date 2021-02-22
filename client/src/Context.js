import React from 'react'

const LanguageContext = React.createContext({
    language: "EN",
    setLanguage: () => { }
})

export default LanguageContext