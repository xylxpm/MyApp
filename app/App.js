/**
 * 入口
 */
import React, {Component} from 'react';
import {Platform, ScrollView, View, Text} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator,
    addNavigationHelpers
} from 'react-navigation';
import {connect} from 'react-redux';


import colors from './baseComponents/Colors';

import Login from './pages/Login/Login';


import Main from './pages/Main/Main';
import Main_Combat from './pages/Main/Main_Combat'
import Main_Discover from './pages/Main/Main_Discover'
import Main_Path from './pages/Main/Main_Path'
import Main_Questions from './pages/Main/Main_Questions'
import Main_Notes from './pages/Main/Main_Notes'

import Category from './pages/Category/Category';
import Category_List from './pages/Category/Category_List';
import Category_Detail from './pages/Category/Category_Detail';

import Customer from './pages/Customer/Customer';

import Feedback from './pages/Other/Feedback';
import About from './pages/Other/About';
import Other from './pages/Other/Other';

import Splash from './pages/Other/Splash';

import Lists from './pages/List/Lists';


const CustomerStack = StackNavigator({
    Customer: {
        screen: Customer,
    },
    Login: {
        screen: Login,
    }
}, {
    mode: 'modal',
});

const MainStack = StackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
    }
}, {
    mode: 'modal',
});


export const TabContainer = TabNavigator({
        Main: {
            screen: Main,
        },
        Category: {
            screen: Category,
        },
        Lists: {
            screen: Lists,
        },

        Customer: {
            screen: CustomerStack,
        }
    },
    {
        lazy: true,
        swipeEnabled: false,
        tabBarOptions: {
            animationEnabled: false,
            activeTintColor: colors.appColor,
            style: {
                height: Platform.OS === 'ios' ? 50 : 65,
                backgroundColor: colors.white
            },
            activeBackgroundColor: colors.white,
            inactiveBackgroundColor: colors.white,
            inactiveTintColor: colors.tintColor,
            showIcon: true,
            indicatorStyle: {
                height: 0,
            },
            labelStyle: {
                fontSize: 12
            }
        },
        tabBarPosition: 'bottom'
    }
);

// const MyFirstProject = DrawerNavigator({
//     About: {
//         screen: About,
//
//     },
//     Home: {
//         screen: TabContainer,
//
//     },
//
// }, {
//     drawerWidth: 200, // 抽屉宽
//     drawerPosition: 'right', // 抽屉在左边还是右边
//     // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
//     contentOptions: {
//         initialRouteName: 'Home', // 默认页面组件
//         activeItemKey: 'Notifications',
//         labelStyle: {//标签样式
//             // color : 'red',
//             height: 30,
//         },
//         activeTintColor: 'white',  // 选中文字颜色
//         activeBackgroundColor: '#ff8500', // 选中背景颜色
//         inactiveTintColor: '#666',  // 未选中文字颜色
//         inactiveBackgroundColor: '#fff', // 未选中背景颜色
//         style: {  // 样式
//             marginVertical: 0,
//         },
//         //没有作用
//         onItemPress: (route) => {
//             console.log('-------->' + JSON.stringify(route))
//         },
//
//     },
//
//     contentComponent: props => {
//         return (
//             <ScrollView>
//                 <View>
//                     <View style={{paddingVertical: 20, paddingHorizontal: 15, backgroundColor:'#000'}}>
//                         <Text style={{color:'#FFF'}}>ser Name</Text>
//                     </View>
//                 </View>
//             </ScrollView>
//         )
//     },
// });


export const MyApp = StackNavigator({

    Home: {
        screen: TabContainer,
    },
    Splash: {
        screen: Splash,
    },
    Main_Combat: {
        screen: Main_Combat,
    },
    Main_Path: {
        screen: Main_Path,
    },
    Main_Questions: {
        screen: Main_Questions,
    },
    Main_Notes: {
        screen: Main_Notes,
    },
    Main_Discover: {
        screen: Main_Discover,
    },
    Category_List: {
        screen: Category_List,
    },
    Category_Detail: {
        screen: Category_Detail,
    },
    Feedback: {
        screen: Feedback,
    },
    About: {
        screen: About,
    },
    Other: {
        screen: Other,
    },
}, {
    headerMode: 'screen',

    navigationOptions: {
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: colors.appColor,
            elevation: 0,
            height: 60
        },
        headerTitleStyle: {
            color: colors.white,
            fontSize: 20,
            alignSelf: 'center'
        },
        headerTintColor: colors.white
    }
});


const AppWithNavigationState = ({dispatch, nav}) => (
    <MyApp navigation={addNavigationHelpers({ dispatch, state: nav })}/>
);

const mapStateToProps = state => ({
    nav: state.nav,
});


//export default App;

export default connect(mapStateToProps)(AppWithNavigationState);




