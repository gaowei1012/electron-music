import types from "../actionTypes";
import { request } from "../../js/request";
// 登录
export function getVedio(url) {
  return (dispatch) => {
    request(url)
      .then((res) => {
        let data = res.data;
        dispatch({
          type: types.GET_PLAY_VEDIO_SUCCESS,
          item: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.GET_PLAY_VEDIO_FAIL,
          err,
        });
      });
  };
}
