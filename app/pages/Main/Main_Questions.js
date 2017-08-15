/**
 * 猿问
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import MyTabBar from '../../components/MyTabBar';

class Main_Questions extends Component {
    constructor(props) {
        super(props);
        // this.state={
        //     tabName:['全部', '基础', '案例', '框架'],
        //     tabIconName:[]
        // }
    }


    render() {
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
                    <Text >全部</Text>
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

})


export default Main_Questions