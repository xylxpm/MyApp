/**
 * 猿问
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Modal,
    TouchableOpacity,
    View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import MyTabBar from '../../components/MyTabBar';



class Main_Questions extends Component {
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

    render() {
        let modalBG = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)',
        }


        let innerContainer = this.state.transparent ? { backgroundColor: '#fff', padding: 20 } : null;

        return (
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar/>}
                tabBarPosition='overlayTop'
                tabBarUnderlineStyle={{
                    backgroundColor:'#888888'
                }}
                tabBarTextStyle={{color:'#888888'}}

            >
                <View tabLabel="全部" style={styles.center}>
                    <Modal
                        animationType={this.state.animationType}
                        visible={this.state.modalVisible}
                        transparent={this.state.transparent}
                        onRequestClose={() => { this._setModalVisible(false) } }
                    >
                        <View style={[styles.container, modalBG]}>
                            <View style={[styles.innerContainer, innerContainer]}>
                                <Text>我是modal</Text>
                                <TouchableOpacity onPress={this._setModalVisible.bind(this,false)}><Text>点击我关闭</Text></TouchableOpacity>
                            </View>


                        </View>

                    </Modal>
                    <TouchableOpacity onPress={this._setModalVisible.bind(this,true)}><Text>点击我</Text></TouchableOpacity>
                </View>
                <View tabLabel="基础" style={styles.center}>
                    <Text >基础</Text>
                </View>
                <View tabLabel="案例" style={styles.center}>
                    <Text >案例</Text>
                </View>
                <View tabLabel="框架" style={styles.center}>
                    <Text >框架</Text>
                </View>

            </ScrollableTabView>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
})


export default Main_Questions