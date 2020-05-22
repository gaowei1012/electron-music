import types from "../actionTypes";
const initState = {};

export default function getRadioType(state = initState, action) {
  switch (action.type) {
    case types.GET_RADIO_TYPE_SUCCESS:
      return {
        ...state,
        item: action.item.data,
      };
    case types.GET_RADIO_TYPE_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}
