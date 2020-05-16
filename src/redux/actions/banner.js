import types from "../actionTypes";
import { request } from "../../js/request";

// 获取banner
export function getBanner(url) {
  return (dispatch) => {
    request(url)
      .then((res) => {
        // console.log("banner res", res);
        let data = res.data.banners;
        dispatch({
          type: types.GET_BANNER_SUCCESS,
          item: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.GET_BANNER_FAIL,
          err,
        });
      });
  };
}
