/**
 * Created by xylxpm on 2017/7/28.
 */
import * as ActionTypes from '../constant/ActionTypes'
import  HttpRequest from '../common/Http'


const keyWords = 'bottle';



export function getProductList (pageNo=1,keyWords='dog') {
    let url = `https://m.alibaba.com/products/${keyWords}/${pageNo}.html?XPJAX=1`;
    return dispatch => {
        if (pageNo === 1) {
            dispatch(changeProductListRefreshing(true));
        };
        // 这里抓取的是阿里巴巴的一项数据
        // https://m.alibaba.com/products/tool_boxes/2.html?XPJAX=1
        // https://m.alibaba.com/products/tool_boxes/3.html?XPJAX=1
        // https://m.alibaba.com/products/tool_boxes/4.html?XPJAX=1
        return HttpRequest(url)
            .then((responseData) => {
                dispatch(gotProductList(responseData,pageNo,));
                console.log(`---------> ,成功加载${responseData.productNormalList.length}条数据`, ActionTypes);
                // console.log("********* ",responseData);
                if (pageNo === 1) {
                    dispatch(changeProductListRefreshing(false));
                }else{
                    dispatch(changeProductListLoadingMore(false));
                }
            })
            .catch((error) => {
                dispatch(changeProductListRefreshing(false));
                dispatch(changeProductListLoadingMore(false));
                console.log("error",error);
            });
    }
}

function gotProductList (argument,pageNo) {
    return {
        type: ActionTypes.GET_PRODUCT_LIST_SUCC,
        value: argument,
        pageNo
    }
}
// 刷新（状态）
export function changeProductListRefreshing(argument) {
    return {
        type: ActionTypes.CHANGE_PRODUCT_LIST_REFRESHING,
        value: argument
    }
}
// 加载更多（状态）
export function changeProductListLoadingMore(argument) {
    console.log(" changeProductListLoadingMore ",argument);
    return {
        type: ActionTypes.CHANGE_PRODUCT_LIST_LOADINGMORE,
        value: argument
    }
}