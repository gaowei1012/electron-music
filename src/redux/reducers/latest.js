import types from "../actionTypes";
// 初始化state
const initState = {};
/**
 *
 * @param {*} state  保存action中成功的state的数据
 * @param {*} action diapatch触发
 */
export default function getMusicList(state = initState, action) {
  switch (action.type) {
    case types.GET_LATEST_MUSIC_SUCCESS:
      return {
        ...state,
        item: action.item.data,
        isLodding: false,
      };
    case types.GET_LATEST_MUSIC_FAIL:
      return {
        ...state,
        isLodding: true,
      };

    default:
      return state;
  }
}
