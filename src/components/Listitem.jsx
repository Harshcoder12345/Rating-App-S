import React, { useContext } from 'react'
import ThemeContext from '../provider/theme/ThemeContext'
import FeedbackContext from '../provider/feedback/FeedbackContext'

const Listitem = ( {feedback}) => {

    // let theme = true
    const {theme,} = useContext(ThemeContext)

    const{  DeleteFeedback, EditFeedback} = useContext(FeedbackContext)
  return (
    <li className={theme ? 'list-group-item bg-dark text-light m-3 ' : 'list-group-item bg-light text-dark m-3 '}>
    <h1>Text: {feedback.text}</h1>
   <p>Rating: {feedback.rating}</p>
   <span className='float-end'>
    <button className="btn btn-sm btn-success mx-2" onClick={()=> EditFeedback(feedback)}>Edit</button>
    <button className="btn btn-sm btn-danger"  onClick  = {()=> {DeleteFeedback(feedback.id)}}>Delete</button>
   </span>
  </li>
  )
}

export default Listitem