import types from "../actionTypes";
const initState = {};

export default function getVedio(state = initState, action) {
  switch (action.type) {
    case types.GET_DJ_BANNER_SUCCESS:
      return {
        ...state,
        item: action.item.data,
      };
    case types.GET_DJ_BANNER_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}
