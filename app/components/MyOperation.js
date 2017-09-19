/**
 * 操作菜单
 */
import React, {Component} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Platform,
    Image,
    Modal,
    Text, Switch,
    View
} from 'react-native';

import colors from '../baseComponents/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

import {logOut} from '../actions/UserAction';

class MyOperation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animationType: 'none',
            modalVisible: false,
            transparent: true
        }
    }


    _setModalVisible =(visible)=>{
        this.setState({
            modalVisible:visible
        })
    }

    _startShow=()=>{
        alert('开始')
    }

    componentWillReceiveProps(nextProps) {
        const {skip} = this.props.UserReducer;
    }

    render() {
        const UserReducer = this.props.UserReducer;
        let modalBG = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)',
        }


        let innerContainer = this.state.transparent ? { backgroundColor: '#fff', padding: 20 } : null;

        return (
            <View style={[styles.flex]}>
                <Modal
                    animationType={this.state.animationType}
                    visible={this.state.modalVisible}
                    transparent={this.state.transparent}
                    onRequestClose={() => { this._setModalVisible(false) } }
                >
                    <View style={[styles.container, modalBG]}>
                        <View style={[styles.innerContainer, innerContainer]}>
                            <Text>我是历史记录</Text>
                            <TouchableOpacity onPress={this._setModalVisible.bind(this,false)}><Text>点击我关闭</Text></TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View style={[styles.flexb]}>
                    <View style={[styles.flexDRow]}>
                        <Ionicons
                            name={'ios-images-outline'}
                            size={26}
                            style={{ color: colors.blue,}}
                        />
                        <View style={[styles.rowRight]}>
                            <TouchableOpacity style={{flex:1}} onPress={this._setModalVisible.bind(this,true)}><Text >历史记录</Text></TouchableOpacity>
                            <Ionicons
                                name={'ios-arrow-forward'}
                                size={26}
                                style={styles.crrroght}
                            />
                        </View>
                    </View>

                    <View style={[styles.flexDRow]}>
                        <Ionicons
                            name={'ios-alarm-outline'}
                            size={26}
                            style={{ color: colors.yellow,}}
                        />
                        <View style={[styles.rowRight]}>
                            <Text style={{flex:1}}>我的路径</Text>
                            <Ionicons
                                name={'ios-arrow-forward'}
                                size={26}
                                style={styles.crrroght}
                            />
                        </View>
                    </View>


                    { UserReducer.isLoggedIn ?

                        <View style={[styles.flexDRow]}>
                            <Ionicons
                                name={'ios-paw-outline'}
                                size={26}
                                style={{ color: colors.green,}}
                            />
                            <View style={[styles.rowRight]}>
                                <Text style={{flex:1}}>我的课表</Text>
                                <Ionicons
                                    name={'ios-arrow-forward'}
                                    size={26}
                                    style={styles.crrroght}
                                />
                            </View>
                        </View>

                        :
                        <View style={[styles.flexDRow]}>
                            <Ionicons
                                name={'ios-paw-outline'}
                                size={26}
                                style={{ color: colors.green,}}
                            />
                            <View style={[styles.rowRight,styles.nob]}>
                                <Text style={{flex:1}}>我的课表</Text>
                                <Ionicons
                                    name={'ios-arrow-forward'}
                                    size={26}
                                    style={styles.crrroght}
                                />
                            </View>
                        </View>

                    }


                    { UserReducer.isLoggedIn ?
                        <View style={[styles.flexDRow]}>
                            <Ionicons
                                name={'ios-ribbon-outline'}
                                size={26}
                                style={{ color: colors.pink,}}
                            />
                            <View style={[styles.rowRight,styles.nob]}>
                                <Text style={{flex:1}}>我的订单</Text>
                                <Ionicons
                                    name={'ios-arrow-forward'}
                                    size={26}
                                    style={styles.crrroght}
                                />
                            </View>
                        </View>
                        : null}
                </View>

                <View style={[styles.flexb,styles.mb]}>
                    <View style={[styles.flexDRow]}>
                        <Ionicons
                            name={'ios-moon-outline'}
                            size={26}
                            style={{ color: colors.blue,}}
                        />
                        <View style={[styles.rowRight]}>
                            <Text style={{flex:1}}>夜间模式</Text>
                            <Switch style={{marginRight:15}}></Switch>
                        </View>
                    </View>


                    <View style={[styles.flexDRow]}>
                        <Ionicons
                            name={'ios-bulb-outline'}
                            size={26}
                            style={{ color: colors.green,}}
                        />
                        <View style={[styles.rowRight,styles.nob]}>
                            <Text style={{flex:1}}>系统设置</Text>

                            <Ionicons
                                name={'ios-arrow-forward'}
                                size={26}
                                style={styles.crrroght}
                            />
                        </View>
                    </View>


                </View>

                { UserReducer.isLoggedIn ?
                    <TouchableOpacity activeOpacity={0.9} onPress={()=>{this.props.logOut()}}>
                        <Text style={styles.logoutBtn}>退出登录</Text>
                    </TouchableOpacity>
                    : null}

            </View>
        )
    }

}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    flexb: {

        backgroundColor: colors.white,
        marginTop: 10,
        paddingLeft: 15,
    },
    mb: {
        marginBottom: 15,
    },
    flexDRow: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
    },
    rowRight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        marginLeft: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.tintColor,

    },
    center: {
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row',
    },
    crrroght: {
        color: colors.tintColor,
        marginRight: 15
    },
    nob: {
        borderBottomWidth: 0,
    },
    logoutBtn: {
        flex: 1,
        fontSize: 14,
        padding: 10,
        borderColor: colors.introduce,
        borderWidth: 1,
        borderRadius: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: colors.white,
        color: colors.appColor,
        textAlign: 'center'
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})


export default connect((state) => {
    const {UserReducer} = state;
    const routes = state.nav.routes;
    return {
        UserReducer,
        routes
    };
}, {logOut})(MyOperation)
