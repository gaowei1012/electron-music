import types from "../actionTypes";
import { request } from "../../js/request";

export function getStationBanner(url) {
  return (dispatch) => {
    request(url)
      .then((res) => {
        let data = res.data;
        dispatch({
          type: types.GET_DJ_BANNER_SUCCESS,
          item: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.GET_DJ_BANNER_FAIL,
          err,
        });
      });
  };
}
