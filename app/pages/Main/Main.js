/**
 * 主页
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../baseComponents/Colors';

import MySwiper from '../../components/MySwiper';
import MyMenuBtn from '../../components/MyMenuBtn';
import MyCardList from '../../components/MyCardList';
import MyHorCardList from '../../components/MyHorCardList';
import MyCatSwiper from '../../components/MyCatSwiper';
import MyTitle from '../../components/MyTitle';

import {connect} from 'react-redux';
import * as USER from '../../actions/UserAction';


class Main extends Component {

    static navigationOptions = ({navigation}) => ({
        title: '喵主页',

        headerLeft: (<Ionicons
            name={'ios-search'}
            size={26}
            style={{ color: colors.white,marginLeft:10 }}
        />),
        headerRight: (
            <Ionicons
                name={'ios-mail'}
                size={26}
                style={{ color: colors.white,marginRight:10}}
            />
        ),
        tabBarIcon: ({tintColor, focused}) => (
            <Ionicons
                name={focused ? 'ios-home' : 'ios-home-outline'}
                size={26}
                style={{ color: tintColor }}
            />
        ),
    })


    constructor(props) {
        super(props);
        // const UserReducer = this.props.UserReducer;
        // if (!UserReducer.isLoggedIn) {
        //     this.props.navigation.navigate('Login')
        // }
    }

    render() {
        return (
            <ScrollView style={[styles.flex,styles.main]}>
                <MySwiper></MySwiper>
                <View style={styles.btnlists}>
                    <MyMenuBtn title="实战" icon="ios-cart"
                               onPress={() => this.props.navigation.navigate('Main_Combat')}></MyMenuBtn>
                    <MyMenuBtn title="路径" icon="ios-game-controller-b"
                               onPress={() => this.props.navigation.navigate('Main_Path')}></MyMenuBtn>
                    <MyMenuBtn title="猿问" icon="ios-locate"
                               onPress={() => this.props.navigation.navigate('Main_Questions')}></MyMenuBtn>
                    <MyMenuBtn title="手记" icon="ios-bonfire"
                               onPress={() => this.props.navigation.navigate('Main_Notes')}></MyMenuBtn>
                    <MyMenuBtn title="发现" icon="ios-megaphone"
                               onPress={() => this.props.navigation.navigate('Main_Discover')}></MyMenuBtn>
                </View>
                <MyCardList></MyCardList>
                <MyHorCardList></MyHorCardList>
                <View>
                    <MyTitle icon="ios-contacts" colour="#F48FB1" title="推荐老师" isChange="false"></MyTitle>
                </View>
                <MyCatSwiper></MyCatSwiper>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    main: {
        marginBottom: 0
    },
    btnlists: {
        marginTop: 10,
        height: 60,
        flexDirection: 'row'
    },

})

// export default Main;

export default connect((state) => {
    const {UserReducer} = state;
    const routes = state.nav.routes;
    return {
        UserReducer,
        routes
    };
}, {USER})(Main)