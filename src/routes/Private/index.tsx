import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Navigate,
  IndexRouteProps,
  LayoutRouteProps,
  useLocation,
} from "react-router-dom";
import { bindActionCreators } from "redux";

import { actionCreators } from "../../_state";

import { State } from "../../_state/reducers";

type PrivateProps = {
  children: JSX.Element;
};

export default function Private({ children }: PrivateProps) {
  const dispatch = useDispatch();
  const { loginUser } = bindActionCreators(actionCreators, dispatch);

  const user = useSelector((state: State) => state.users);
  let location = useLocation();

  return user.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
}
