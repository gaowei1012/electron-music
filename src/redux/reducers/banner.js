import types from "../actionTypes";
const initState = {};

export default function getBanner(state = initState, action) {
  switch (action.type) {
    case types.GET_BANNER_SUCCESS:
      return {
        ...state,
        item: action.item,
      };
    case types.GET_BANNER_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}
