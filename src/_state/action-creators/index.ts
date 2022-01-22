import { Dispatch } from "redux";
import { UserActionTypes } from "../../_constants/user";
import { ActionTypes } from '../actions/user';

const loginUser = (user: string) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch({
      type: UserActionTypes.LOGIN,
      payload: user,
    });
  };
};

const logoutUser = () => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch({
      type: UserActionTypes.LOGOUT,
      payload: null
    });
  };
};

export {
  loginUser,
  logoutUser,
}
