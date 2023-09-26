import { createReducer } from "@reduxjs/toolkit";
import comment_actions from "../actions/comments";

const { read_comments,write_new_comment } = comment_actions

const initial_state = {
    comments: [],
    comment:[]
}

const comments_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
    read_comments.fulfilled,
    (state,action)=> {
        let new_state = {
            ...state,
            comments: action.payload.comments,
        }
     return new_state
    }
    ).addCase(
        write_new_comment.fulfilled,
        (state,action)=> {
         let new_state = {
             ...state,
             coment: action.payload.comment,
         }
         return new_state
        } 
     )
)
export default comments_reducer