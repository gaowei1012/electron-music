import types from "../../actionTypes";
import { request } from "../../../js/requset";

export function getLoginState(url) {
  return (dispatch) => {
    request(url)
      .then((res) => {
        let data = res.data;
        dispatch({
          type: types.GET_LOGIN_STATE_SUCCESS,
          item: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.GET_LOGIN_STATE_FAIL,
          err,
        });
      });
  };
}
