import React, { useState, useContext } from 'react'
import LanguageContext from '../../Context'

const WithLagnguage = ({ children }) => {
    const context = useContext(LanguageContext)
    const [language, setLanguage] = useState(context.language);
    return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export default WithLagnguage
