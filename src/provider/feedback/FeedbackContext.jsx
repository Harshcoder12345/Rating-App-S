import { createContext, useState } from "react";

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {

const [feedbacks , setFeedback] = useState([
    // {id:1, text : "Very Good product", rating : 3},
 
])

const[ edit, setEdit ] = useState({feedback : {} , isEdit : false})


const EditFeedback = (oldfeedback) => {
    setEdit({feedback:oldfeedback, isEdit:true})
}

const DeleteFeedback = (id) => {
    
    setFeedback(feedbacks.filter((feedback)=> feedback.id!==id))

}


const AddFeedback = (rating, text) => {
  
    setFeedback([{id:crypto.randomUUID(), text:text, rating: rating}, ...feedbacks])
}



const UpdateFeedback = (newtext, newrating, oldid) => {
   
    const updatedfeedback = {id:oldid, text:newtext, rating:newrating }
   
   
setFeedback(feedbacks.map((feedback)=>(feedback.id===oldid? updatedfeedback:feedback)))

// setFeedback(feedbacks.map((feedback)=> {if(feedback.id===oldid){
//     return updatedfeedback
// }else{
// return feedback
// }}))
setEdit({feedback : {} , isEdit : false})

}














    return (
        <FeedbackContext.Provider  value = {{feedbacks, DeleteFeedback, AddFeedback, EditFeedback, edit, UpdateFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}





export default FeedbackContext