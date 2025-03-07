import React, { useContext, useState } from 'react'
import Listitem from './Listitem'
import FeedbackContext from '../provider/feedback/FeedbackContext'

const Listgroup = () => {

const {feedbacks} = useContext(FeedbackContext)
// console.log(feedbacks);


  return (
    <ul className='list-group container my-3'>
      {
      feedbacks.map((feedback)=>{ return  <Listitem key = {feedback.id}  feedback={feedback}/>} )
       
      }

  </ul>
  )
}

export default Listgroup