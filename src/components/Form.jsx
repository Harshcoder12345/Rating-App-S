import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../provider/feedback/FeedbackContext'

const Form = () => {

const {AddFeedback, edit, UpdateFeedback} = useContext(FeedbackContext)

const [rating, setRating ] = useState('')
const [text, setText] = useState('')






const handleClick = (e) => {
e.preventDefault() 
if(!edit.isEdit){
    AddFeedback(rating, text)
}else{
    UpdateFeedback(text, rating, edit.feedback.id)
}

setRating('')
setText('')
}


useEffect(()=> {
setRating(edit.feedback.rating)
setText(edit.feedback.text)
}, [edit])

  return (
    <form  onSubmit={(e)=> handleClick(e)} > 
    <select className='form-control'  onChange={(e)=> setRating(e.target.value) }
    value = {rating} >
       <option value="Select Rating">Selct Rating</option>
       <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <textarea className='form-control my-2' placeholder='Enter Your Reviews' onChange={(e)=> {setText(e.target.value); e.stopPropagation()}}
    value = {text}
        ></textarea>
    <button className="btn btn-success w-100"  >Submit</button>
  
  </form >
  )
}

export default Form