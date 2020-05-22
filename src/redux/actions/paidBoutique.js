import types from "../actionTypes";
import { request } from "../../js/request";
// 登录
export function getPaid(url) {
  return (dispatch) => {
    request(url)
      .then((res) => {
        let data = res.data;
        dispatch({
          type: types.GET_PAID_BOUTIQUE_SUCCESS,
          item: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.GET_PAID_BOUTIQUE_FAIL,
          err,
        });
      });
  };
}
