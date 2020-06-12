import types from "../../actionTypes";
// 初始化state
const initState = {};

export default function getUserInfo(state = initState, action) {
  switch (action.type) {
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        item: action.item,
        isLoading: false,
      };
    case types.GET_USER_FAIL:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}