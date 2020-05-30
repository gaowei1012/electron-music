import types from "../actionTypes";
import { request } from "../../js/request";

export function getArtistList(url) {
  return (dispatch) => {
    request(url)
      .then((res) => {
        // console.log("banner res", res);
        let data = res.data;
        dispatch({
          type: types.GET_ARTIST_LIST_SUCCESS,
          item: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.GET_ARTIST_LIST_FAIL,
          err,
        });
      });
  };
}
