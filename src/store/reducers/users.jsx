import { createReducer } from "@reduxjs/toolkit";
import user_actions from "../actions/users";
const { signin, signin_token, signout} = user_actions

const initial_state = {
    user:{},
    token:'',
    messages:[]
}

const users_reducer = createReducer(
    initial_state,
    build=>build.addCase(
        signin.fulfilled,
        (state,action)=>{
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                massages: action.payload.messages
            }
            return new_state
        }
    ).addCase(
        signin_token.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    ).addCase(
        signout.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    )
)
export default users_reducer