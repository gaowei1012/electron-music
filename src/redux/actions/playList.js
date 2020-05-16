import types from "../actionTypes";
import { request } from "../../js/request";

export function getPlayList(url) {
  return (dispatch) => {
    request(url)
      .then((res) => {
        let data = res.data;
        dispatch({
          type: types.GET_PLAY_LIST_SUCCESS,
          item: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.GET_PLAY_LIST_FAIL,
          err,
        });
      });
  };
}
