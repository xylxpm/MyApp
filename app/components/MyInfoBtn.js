/**
 * 用户btn
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Button,
    Image,
    Text,
    View
} from 'react-native';

import MyMenuBtn from '../components/MyMenuBtn';
import {connect} from 'react-redux';

import * as USER from '../actions/UserAction';

class MyInfoBtn extends Component {

    constructor(props) {
        super(props)

    }

    _showLoginView = () => {
        this.props.navigation.navigate('Login')
    }

    _showInfo = () => {
        alert('me')
    }

    _click = (otp) => {
        const UserReducer = this.props.UserReducer;
        UserReducer.isLoggedIn ? this._showInfo() : this._showLoginView()
    }

    render() {

        return (
            <View style={styles.btnlists}>
                <MyMenuBtn title="我的课程" icon="ios-cart" onPress={ this._click.bind(this)}></MyMenuBtn>
                <MyMenuBtn title="我的实战" icon="ios-game-controller-b" onPress={ this._click.bind(this)}></MyMenuBtn>
                <MyMenuBtn title="我的猿问" icon="ios-locate" onPress={ this._click.bind(this)}></MyMenuBtn>
                <MyMenuBtn title="我的手记" icon="ios-megaphone" onPress={ this._click.bind(this)}></MyMenuBtn>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    btnlists: {
        marginTop: 10,
        height: 60,
        flexDirection: 'row'
    },
})


export default connect((state) => {
    const {UserReducer} = state;
    const routes = state.nav.routes;
    return {
        UserReducer,
        routes
    };
}, {USER})(MyInfoBtn)

