import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComments from "./CardComments";
import comment_actions from "../store/actions/comments";
import formatDate from "../helpers/formatDate";

const { read_comments } = comment_actions;

export default function Comments({ p_itinerary_id, currentUser }) {
  const [comments, setComment] = useState([]);
  const dispatch = useDispatch();

   useEffect(() => {
     dispatch(read_comments({ itinerary_id: p_itinerary_id }))
     .then(response => setComment(response.payload.comments))
     .catch(err => console.log(err))
   }, []);
   
   
console.log(comments)
  return (
    <>
    {comments?(
      comments.map((each,index) => (
        <CardComments
          key={index}
          user_photo={each.user_id.photo}
          user_name={each.user_id.name}
          date={formatDate(each.createdAt)}
          text={each.text}
          p_comment_id={each._id}
          currentUser = {currentUser} 
        />
      ))
         ): (
          <div></div>
         )}  
    </>
  )
}
