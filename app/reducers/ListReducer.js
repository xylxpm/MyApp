/**
 * Created by xylxpm on 2017/7/28.
 */

import * as ActionTypes from '../constant/ActionTypes';

const initialState = {
    products: [],
    isRefreshing: false,
    isLoadingMore: false,
    totalProductCount: 200
};

export default function ListReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_PRODUCT_LIST_SUCC:
            console.log("刷新 重置products",action.pageNo);
            if (action.pageNo === 1) {
                console.log("刷新 重置products");
                newState = Object.assign({}, state, {
                    products: action.value.productNormalList
                });
            } else {
                newState = Object.assign({}, state, {
                    products: state.products.concat(action.value.productNormalList)
                });
            }
            return newState;
        case ActionTypes.CHANGE_PRODUCT_LIST_REFRESHING:
            console.log(" 状态变为： 正在加载中。。。。 ",action.value);
            newState = Object.assign({}, state, {
                isRefreshing: action.value
            });
            return newState;
        case ActionTypes.CHANGE_PRODUCT_LIST_LOADINGMORE:
            newState = Object.assign({}, state, {
                isLoadingMore: action.value
            });
            return newState;
        default:
            return state;
    }
}
