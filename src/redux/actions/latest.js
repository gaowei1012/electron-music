import types from "../actionTypes";
import { request } from "../../js/request";

export function getMusicList(url) {
  return (dispatch) => {
    request(url)
      .then((res) => {
        let data = res.data;
        dispatch({
          type: types.GET_LATEST_MUSIC_SUCCESS,
          item: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.GET_LATEST_MUSIC_FAIL,
          err,
        });
      });
  };
}
