import types from "../../actionTypes";
import { request } from "../../../js/requset";

export function goLoginout(url) {
  return (dispatch) => {
    request(url)
      .then((res) => {
        let data = res.data;
        dispatch({
          type: types.GET_LOGINOUT_SUCCESS,
          item: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.GET_LOGINOUT_FAIL,
          err,
        });
      });
  };
}
