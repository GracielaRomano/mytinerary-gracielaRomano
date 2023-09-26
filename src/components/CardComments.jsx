import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import comment_actions from "../store/actions/comments";
const { edit_comment, delete_comment } = comment_actions;

export default function CardComments({
  user_photo,
  text,
  user_name,
  date,
  p_comment_id,
  currentUser,
}) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [comment_text, setComment_text] = useState(text)
  const update_comment = useRef("");


  const handleEditComment = () =>{
    setIsEdit(true)
  }

  async function handleSaveEditComment() {
    text = update_comment.current.value
    setComment_text(text)
    let data = {
      text: update_comment.current.value,
      comment_id: p_comment_id,
    };
    dispatch(edit_comment({ data }));
    setIsEdit(false)
  }

  async function handleDeleteComment() {
    let data = {
      comment_id: p_comment_id,
    };
    console.log(data);
    dispatch(delete_comment({ data }));
    const node = document.getElementById(p_comment_id);
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
  }
  const permissionDenied = () => {
    Swal.fire({
      title: "You do not have permission to perform the required action!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  return (
    <div className="container-comments" id={p_comment_id}>
      <div className="card-comments">
        <div className="header-comments">
            <div className="row">
                <div className="col-sm-4 col-md-3 col-lg-2">
                <img
                    className="img-comments"
                    src={user_photo}
                    alt="Foto de usuario"
                />
                </div>
                <div className="col-sm-6 col-md-7 col-lg-8">
                <p className="name-comments">
                    {user_name} <span className="date-comment">{date}</span>
                </p>
                </div>

                {user_name === currentUser.name ? (
                        <div className="col-sm-2 col-md-2 col-lg-2" style={{ cursor: 'pointer' }} >
                            {isEdit ? (
                            <p className="bin">
                                <i className="bi bi-send send-edit" onClick={handleSaveEditComment}></i>
                            </p>
                            ) : (
                            <p className="bin">
                                <i className="bi bi-pencil pencil" onClick={handleEditComment}></i>
                                <i className="bi bi-trash3 trash" onClick={handleDeleteComment}></i>
                            </p>
                            )}
                        </div>
                ) : (
                <></>
                )}
            </div> {/* row */}
        </div>
        <div>
            {isEdit ? (
                <input ref={update_comment} type="text" name="update_comment" defaultValue={comment_text} 
                className="input-comments-edit" />
            ):(
                <p className="text-comments">{comment_text}</p>
            )}
        </div>
      </div>
    </div>
  );
}
