/**
 * 这里有两个用户和用户可能进行的操作（登录和退出）
 */

import {AlertIOS} from 'react-native';
import * as TYPES from '../constant/ActionTypes';

let testUser = {
    'name': '馒头',
    'avatar': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943540744&di=50d6a12eecaad024fc3d661dbc8555e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F9f510fb30f2442a71525d087d543ad4bd11302ec.jpg'
};

let skipUser = {
    'name': '游客',
    'avatar': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943576131&di=3b6f187f402a106feec9eade686fb990&imgtype=0&src=http%3A%2F%2F5.595818.com%2F2014%2Fpic%2F000%2F364%2F883525f3226887a0ad8ce65848c51999.jpg',
};

// login
export function logIn(opt){
    return (dispatch) => {
        dispatch({'type': TYPES.LOGGED_DOING});
        let inner_get = fetch('http://www.baidu.com')
            .then((res)=>{
                dispatch({'type': TYPES.LOGGED_IN, user: testUser});
            }).catch((e)=>{
                AlertIOS.alert(e.message);
                dispatch({'type': TYPES.LOGGED_ERROR, error: e});
            });
    }
}



// skip login
export function skipLogin(){
    return {
        'type': TYPES.LOGGED_IN,
        'user': skipUser,
    }

}


// logout
export function logOut(){
    return {
        'type': TYPES.LOGGED_OUT
    }
}