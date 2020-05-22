import types from "../actionTypes";
import { request } from "../../js/request";

export function getRadioType(url) {
  return (dispatch) => {
    request(url)
      .then((res) => {
        let data = res.data;
        dispatch({
          type: types.GET_RADIO_TYPE_SUCCESS,
          item: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.GET_RADIO_TYPE_FAIL,
          err,
        });
      });
  };
}
