import React, { useContext } from 'react'
import FeedbackContext from '../provider/feedback/FeedbackContext'

const Average = () => {

  const {feedbacks} = useContext(FeedbackContext) 

  let total = feedbacks.reduce((a, b)=> parseInt(a) + parseInt(b.rating), 0)

  return (
    <span className='d-flex text-warning w-100 my-2  container justify-content-between'>
    <h5 className='text-dark'>Total Rating : {total} </h5>
    <h5 className='text-dark'>Average Rating : {(total)/(feedbacks.length)}   </h5>
    </span>
  )
}

export default Average