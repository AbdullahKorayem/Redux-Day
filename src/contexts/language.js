import { createContext } from "react";



const languageContext = createContext()

const LanguageProvider = languageContext.Provider


export { languageContext, LanguageProvider }