import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { State } from "../../_state/reducers";

type PrivateProps = {
  children: JSX.Element;
};

export default function Private({ children }: PrivateProps) {
  const user = useSelector((state: State) => state.users);
  let location = useLocation();

  return user.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
}
