import types from "../actionTypes";
import { request } from "../../js/request";
// import Password from "antd/lib/input/Password";
// 获取列表
export function goLogin(url, methods) {
  return (dispatch) => {
    request(url, methods)
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
