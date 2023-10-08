import { LanguageContext } from 'App'
import React from 'react'

const TranslationComp = () => {

    const {language, setLanguage} = React.useContext(LanguageContext)

  return (
    <select value={language} onChange={(e)=>{
        setLanguage(e.target.value)
        console.log(e.target.value)
        } }>
        <option value="english" key={"english"}>english</option>
        <option value="hindi" key={"hindi"}>hindi</option>
    </select>
  )
}

export default TranslationComp