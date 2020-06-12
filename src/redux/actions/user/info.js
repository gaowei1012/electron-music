import types from "../../actionTypes";
import { request } from "../../../js/requset";
// 获取用户信息相亲
export function getUserInfo(url) {
  return (dispatch) => {
    request(url)
      .then((res) => {
        let data = res.data;
        dispatch({
          type: types.GET_USER_SUCCESS,
          item: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.GET_USER_FAIL,
          err,
        });
      });
  };
}
