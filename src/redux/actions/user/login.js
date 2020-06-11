import types from "../../actionTypes"
import { request } from "../../../js/requset";
// 登录
export function onLoginAction(url) {
  return (dispatch) => {
    request(url)
      .then((res) => {
        let data = res.data;
        dispatch({
          type: types.GET_TOKEN_SUCCESS,
          item: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.GET_TOKEN_FAIL,
          err,
        });
      });
  };
}
