import React, { useContext } from 'react'
import ThemeContext from '../provider/theme/ThemeContext'
import { FaSun,  FaMoon } from "react-icons/fa";

const Theme = () => {

const{theme, ThemeChange} = useContext(ThemeContext)

  return (
    <button    id='btn' className= {theme ? "btn btn-sm btn-secondary":"btn btn-sm btn-light"} onClick={ThemeChange}
>{theme ? <FaMoon /> :  <FaSun />}</button>
  )
}

export default Theme