//action creator---jo text input ae return Action with type defined , reducer will read type and change state against it

import { EMAIL_CHANGED } from "./type";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password })=> {
return dispatch => {
firebase
.auth()
.signInWithEmailAndPassword(email,password)
.then(user => {
dispatch({ type: "LOGIN_USER_SUCCESS",payload: user });
});
};
};
