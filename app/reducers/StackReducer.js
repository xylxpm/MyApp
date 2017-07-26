/**
 * Created by xylxpm on 2017/7/19.
 */
import { MyApp } from '../App';


export default function StackReducer(state , action) {
    let nextState;
    switch (action.type) {
        default:
            nextState = MyApp.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}