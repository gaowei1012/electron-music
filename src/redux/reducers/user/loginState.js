import types from "../../actionTypes";
const initState = {};

export default function getLoginState(state = initState, action) {
  switch (action.type) {
    case types.GET_LOGIN_STATE_SUCCESS:
      return {
        ...state,
        item: action.item,
      };
    case types.GET_LOGIN_STATE_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}
