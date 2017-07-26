/**
 * Created by xylxpm on 2017/7/18.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';


import colors from '../../baseComponents/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {skipLogin,logIn} from '../../actions/UserAction';

let {height, width} = Dimensions.get('window');

class Login extends Component {

    static navigationOptions = ({navigation}) => ({
        header: null,
        tabBarVisible: false
    })

    constructor(props) {
        super(props);

        this.state = {
            loginMode: true,
        }
    }


    //登录界面
    _renderLogin = () => {

        return (
            <View style={styles.container}>
                <Image
                    source={require('../../img/4.jpeg')}
                    style={styles.image}>

                    <Ionicons
                        onPress={() => this.props.navigation.goBack()}
                        name={'ios-close'}
                        size={40}
                        style={styles.closeicon }
                    />
                    <Text style={styles.titleword}>欢迎登陆</Text>

                    <TextInput
                        autoFocus={true}
                        blurOnSubmit={true}
                        placeholderTextColor="#cccccc"
                        placeholder="用户名"
                        style={[styles.input]}
                        underlineColorAndroid={'transparent'}
                    />

                    <TextInput
                        autoFocus={true}
                        blurOnSubmit={true}
                        password={true}
                        placeholderTextColor="#cccccc"
                        placeholder="密码"
                        style={[styles.input]}
                        underlineColorAndroid={'transparent'}
                    />

                    <Text style={styles.commBtn}>登录</Text>
                    <TouchableOpacity  activeOpacity={0.8}  onPress={()=>{  this._LoginForSkip();  }}>
                        <Text style={styles.commBtn2}>游客登录</Text>
                    </TouchableOpacity>
                    <Text style={styles.titleword2} onPress={()=>this.setState({   loginMode:false,  })}>没账号？去注册</Text>
                </Image>

            </View>
        )
    }

    _LoginForSkip(){

        this.props.skipLogin();

        this.props.navigation.goBack()
    }

    //注册界面
    _renderRegister = () => {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../img/4.jpeg')}
                    style={styles.image}>
                    <Ionicons
                        onPress={() => this.props.navigation.goBack()}
                        name={'ios-close'}
                        size={40}
                        style={styles.closeicon }
                    />
                    <Text style={styles.titleword}>欢迎注册</Text>
                    <TextInput
                        autoFocus={true}
                        blurOnSubmit={true}
                        placeholderTextColor="#cccccc"
                        placeholder="用户名"
                        style={[styles.input]}
                        underlineColorAndroid={'transparent'}
                    />

                    <TextInput
                        autoFocus={true}
                        blurOnSubmit={true}
                        password={true}
                        placeholderTextColor="#cccccc"
                        placeholder="密码"
                        style={[styles.input]}
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput
                        autoFocus={true}
                        blurOnSubmit={true}
                        password={true}
                        placeholderTextColor="#cccccc"
                        placeholder="验证密码"
                        style={[styles.input]}
                        underlineColorAndroid={'transparent'}
                    />
                    <Text style={styles.commBtn}>注册</Text>
                    <Text style={styles.titleword2} onPress={()=>this.setState({  loginMode:true,  })}>有账号？去登录</Text>
                </Image>
            </View>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.loginMode ? this._renderLogin() : this._renderRegister()  }
            </View>
        );
    }

}


export default connect((state) => {
    const {UserReducer} = state;
    const routes = state.nav.routes;
    return {
        UserReducer,
        routes
    };
}, {skipLogin,logIn})(Login)


const styles = StyleSheet.create({
    container: {
        flex: 1,

        // backgroundColor: '#ccc',
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
        // alignItems: 'center',
        // justifyContent: 'center',
        width: null,
        height: null,
    },
    titleword: {
        alignItems: 'center',
        color: colors.white,
        backgroundColor: 'transparent',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 150,
        marginBottom: 50
    },
    titleword2: {
        color: colors.white,
        backgroundColor: 'transparent',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 50
    },
    closeicon: {
        color: colors.white,
        position: 'absolute',
        left: 25,
        top: 25,
        backgroundColor: 'transparent',
    },
    input: {
        height: 46,
        width: width,
        color: colors.white,
        fontSize: 14,
        padding: 15,
        marginBottom: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    commBtn: {
        fontSize: 16,
        borderRadius: 1,
        margin: 10,
        backgroundColor: colors.appColor,
        color: colors.white,
        textAlign: 'center',
        height: 40,
        lineHeight: 40
    },
    commBtn2: {
        fontSize: 16,
        margin: 10,
        backgroundColor: 'transparent',
        color: colors.white,
        textAlign: 'center',
        height: 40,
        lineHeight: 40
    }

});

