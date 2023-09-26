import { useState, useRef} from "react";
import { useSelector, useDispatch } from 'react-redux';
import comment_actions from "../store/actions/comments";
const { write_new_comment } = comment_actions;

export default function SendComment({ p_itinerary_id }) {
    const text_comment = useRef("");
    const dispatch = useDispatch();
    const currentUser = useSelector((store) => store.users.user);

    async function handleNewComment() {
        let data = {
          text: text_comment.current.value,
          itinerary_id: p_itinerary_id
        };
        console.log(data)
        dispatch(write_new_comment({ data }))
            .then((data) => {
                console.log('se grabo, debo refrescar la pagina')
                text_comment.current.value = ''
            })
    }
    

  return (
        <div className="input-group input-comments"id="sendComment">
            <img className='img-input-comments'src={currentUser.photo} alt="Foto de usuario" />
            <input ref={text_comment} type="text" name="text_comment" className="form-control " placeholder="Comment"/>
            <button className="btn btn-comments" type="submit">
              <i className="bi bi-send send" onClick={handleNewComment}></i>
            </button>
        </div>
  )
}
