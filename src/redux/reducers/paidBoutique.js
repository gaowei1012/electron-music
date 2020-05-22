import types from "../actionTypes";
const initState = {};

export default function getPaid(state = initState, action) {
  switch (action.type) {
    case types.GET_PAID_BOUTIQUE_SUCCESS:
      return {
        ...state,
        item: action.item.data.list,
      };
    case types.GET_PAID_BOUTIQUE_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}
