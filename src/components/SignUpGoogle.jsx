import { useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import user_actions from "../store/actions/users";
const { authGoogle } = user_actions;

export default function () {
  let googleButton = useRef();
  const dispatch = useDispatch();

  const handleCredentialResponse = async (response) => {
    console.log(response);
    const data = { token_google: response.credential };
    dispatch(authGoogle({ data }));
  };

  useEffect(() => {
    
      if (window.google) {
        google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_ID,
          callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(googleButton.current, {
          type: "standard",
          theme: "outline",
          size: "large",
          text: "continue_with",
          locale:"en",
          shape: "pill",
          logoAlignment:"left",
          width:"460px",
          height:"50px"
        });
      }
    
  }, [handleCredentialResponse]);

  return <div ref={googleButton}></div>;
}
