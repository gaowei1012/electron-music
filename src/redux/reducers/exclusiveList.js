import types from "../actionTypes";
const initState = {};

export default function getList(state = initState, action) {
  switch (action.type) {
    case types.GET_EXCLUSIVE_LIST_SUCCESS:
      return {
        ...state,
        item: action.item,
      };
    case types.GET_EXCLUSIVE_LIST_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}
