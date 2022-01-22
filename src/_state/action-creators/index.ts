import { Dispatch } from "redux";
import { UserActionTypes } from "../../_constants/user";
import { ActionTypes } from "../actions/user";

const loginUser = (user: string) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch({
      type: UserActionTypes.LOGIN,
      payload: user,
    });

    localStorage.setItem("@datasales-challenge:user", user);
  };
};

const logoutUser = () => {
  return (dispatch: Dispatch<ActionTypes>) => {
    localStorage.removeItem("@datasales-challenge:user");

    dispatch({
      type: UserActionTypes.LOGOUT,
      payload: null,
    });
  };
};

export { loginUser, logoutUser };
