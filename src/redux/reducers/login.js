import types from "../actionTypes";
// 初始化state
const initState = {};
/**
 *
 * @param {*} state  保存action中成功的state的数据
 * @param {*} action diapatch触发
 */
export default function loginAction(state = initState, action) {
  switch (action.types) {
    case types.GET_TOKEN_SUCCESS:
      return {
        ...state,
        item: action.item,
        isLodding: false,
      };
    case types.GET_TOKEN_FAIL:
      return {
        ...state,
        isLodding: true,
      };

    default:
      return state;
  }
}
