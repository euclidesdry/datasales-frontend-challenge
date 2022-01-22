import { UserActionTypes } from "../../_constants/user";
import { ActionTypes } from "../actions/user";

const savedAuth = localStorage.getItem("@datasales-challenge:user");

const initialLoginState = {
  username: savedAuth ? savedAuth : "",
  isLoggedIn: savedAuth ? true : false,
};

type LoginStateType = {
  username: string;
  isLoggedIn: boolean;
};

const usersReducer = (
  state: LoginStateType = initialLoginState,
  action: ActionTypes
) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        username: action.payload,
        isLoggedIn: true,
      };
    case UserActionTypes.LOGOUT:
      return {
        username: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
