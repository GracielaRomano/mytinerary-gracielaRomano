import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_comments = createAsyncThunk(
    'read_comments',
    async(obj)=> {
        try {
            let data = await axios(apiUrl+'comments?itinerary_id='+obj.itinerary_id)
             console.log(data.data.response);
            return { comments: data.data.response }
        } catch (error) {
            console.log(error);
            return {
                comment: {},
            }
        }
    }
)
const ldelete_comment = createAsyncThunk(
  'comments/ldelete_comment',
  async (commentId, { getState }) => {
    try {
      const state = getState();
      const currentUser = state.user; // Obtener el usuario actual del estado

      // Obtener el comentario que se desea borrar
      const commentToDelete = state.comment.find(comment => comment._id === commentId);

      // Verificar si el usuario actual coincide con el usuario que creó el comentario
      if (currentUser.id === commentToDelete.userId) {
        let token = localStorage.getItem('token')
        let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }

        const response = await axios.delete(apiUrl + 'comments/' + commentId, authorization);
        return response.data;
      } else {
        throw new Error('No tienes permiso para borrar este comentario.');
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

  const write_new_comment = createAsyncThunk(
    'write_new_comment',
    async(obj)=>{
      try {
        let token = localStorage.getItem('token')
        let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }

        let data = await axios.post(apiUrl+'comments', obj.data, authorization)
        console.log(data, ' toke: ',authorization);

        return{
              user: data.data.response.user,
              token: data.data.response.token,
              comment: data.data.response,
              messages:[]
         }
      } catch (error) {
          console.log(error)
          return{
              user: {},
              token:'',
              messages: error.response.data.messages || [error.response.data.message]
          }
      }
  }
  );

  const edit_comment = createAsyncThunk(
    'edit_comment',
    async(obj)=>{
      try {
        let token = localStorage.getItem('token')
        let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }

        let data = await axios.put(apiUrl+'comments/'+ obj.data.comment_id, obj.data, authorization)
        console.log(data, ' toke: ',authorization);

        return{
              user: data.data.response.user,
              token: data.data.response.token,
              comment: data.data.response,
              messages:[]
         }
      } catch (error) {
          console.log(error)
          return{
              user: {},
              token:'',
              messages: error.response.data.messages || [error.response.data.message]
          }
      }
  }
);

  const delete_comment = createAsyncThunk(
    'delete_comment',
    async(obj)=>{
      try {
        let token = localStorage.getItem('token')
        let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }

        let data = await axios.delete(apiUrl+'comments/'+ obj.data.comment_id, authorization)
        console.log(data, ' toke: ',authorization);

        return{
              user: data.data.response.user,
              token: data.data.response.token,
              comment: data.data.response,
              messages:[]
         }
      } catch (error) {
          console.log(error)
          return{
              user: {},
              token:'',
              messages: error.response.data.messages || [error.response.data.message]
          }
      }
  }
);
  
  
const comment_actions = {read_comments, delete_comment, edit_comment, write_new_comment }
export default comment_actions