import React, { useContext } from 'react'
import Form from './Form'
import Listgroup from './Listgroup'
import ThemeContext from '../provider/theme/ThemeContext'

const Cardcomponent = () => {

    const {theme} = useContext(ThemeContext)
    // let theme = true
  return (
    <div className={theme ? "card bg-dark container p-5" :"card bg-light container p-5"}>
<Form/>
    </div>
  )
}

export default Cardcomponent