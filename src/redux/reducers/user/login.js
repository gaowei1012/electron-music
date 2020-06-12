import types from "../../actionTypes";
// 初始化state
const initState = {};
/**
 *
 * @param {*} state  保存action中成功的state的数据
 * @param {*} action diapatch触发
 */
export default function onLoginAction(state = initState, action) {
  switch (action.type) {
    case types.GET_TOKEN_SUCCESS:
      return {
        ...state,
        item: action.item,
        isLoading: false,
      };
    case types.GET_TOKEN_FAIL:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}
