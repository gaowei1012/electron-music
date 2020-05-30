import types from "../actionTypes";
const initState = {};

export default function getArtistList(state = initState, action) {
  switch (action.type) {
    case types.GET_ARTIST_LIST_SUCCESS:
      return {
        ...state,
        item: action.item.artists,
      };
    case types.GET_ARTIST_LIST_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}
