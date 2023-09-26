import { useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import user_actions from "../store/actions/users";
const { authGoogle } = user_actions;

export default function () {
  console.log("btn_google SignIn");
  let googleButton = useRef();
  const dispatch = useDispatch();

  const handleCredentialResponse = async (response) => {
    const data = { token_google: response.credential };
    dispatch(authGoogle({ data }));
  };

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_ID,
        callback: handleCredentialResponse,
      });

      google.accounts.id.renderButton(googleButton.current, {
        type: "standard",
        theme: "outline",
        size: "large",
        text: "signin_with",
        locale:"en",
        shape: "pill",
        logoAlignment:"left",
        width:"290px",
        height:"50px"
      });
    }
  }, [handleCredentialResponse]);

  return <div ref={googleButton}></div>;
}