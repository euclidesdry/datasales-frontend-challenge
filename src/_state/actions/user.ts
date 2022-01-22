import { UserActionTypes } from "../../_constants/user";

interface ILoginAction {
  type: UserActionTypes.LOGIN;
  payload: string;
}

interface ILogoutAction {
  type: UserActionTypes.LOGOUT;
}

export type ActionTypes = ILoginAction | ILogoutAction;
