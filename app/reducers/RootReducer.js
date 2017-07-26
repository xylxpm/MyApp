/**
 * Created by xylxpm on 2017/7/19.
 */
import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import nav from './StackReducer';


//取决于这里你加入了多少 reducer
const RootReducer = combineReducers({
    UserReducer:UserReducer,
    nav
});

export default RootReducer;