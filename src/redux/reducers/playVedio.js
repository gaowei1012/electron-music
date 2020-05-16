import types from "../actionTypes";
const initState = {};

export default function getVedio(state = initState, action) {
  switch (action.type) {
    case types.GET_PLAY_VEDIO_SUCCESS:
      return {
        ...state,
        item: action.item,
      };
    case types.GET_PLAY_VEDIO_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}
