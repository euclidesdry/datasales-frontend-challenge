const initialLoginState = false;

type Action = {
  type: string;
  payload?: boolean;
};

const reducer = (state: boolean = initialLoginState, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
};

export default reducer;
