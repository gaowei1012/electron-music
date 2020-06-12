import types from "../../actionTypes";
const initState = {};

export default function goExit(state = initState,action) {
  switch (action.type) {
    case types.GET_LOGINOUT_SUCCESS:
      return {
        ...state,
        item: action.item,
      };
    case types.GET_LOGINOUT_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}
