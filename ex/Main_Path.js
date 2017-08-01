/**
 * 路径页面
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    Dimensions,
    RefreshControl,
    FlatList,
    ActivityIndicator,
    DeviceEventEmitter,
    ScrollView,
    SectionList
} from 'react-native';

import AlphabetListView from 'react-native-alphabetlistview';


class Main_Path extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: {
                A: ['some', 'entries', 'are here'],
                B: ['some', 'entries', 'are here'],
                C: ['some', 'entries', 'are here'],
                D: ['some', 'entries', 'are here'],
                E: ['some', 'entries', 'are here'],
                F: ['some', 'entries', 'are here'],
                G: ['some', 'entries', 'are here'],
                H: ['some', 'entries', 'are here'],
                I: ['some', 'entries', 'are here'],
                J: ['some', 'entries', 'are here'],
                K: ['some', 'entries', 'are here'],
                L: ['some', 'entries', 'are here'],
                M: ['some', 'entries', 'are here'],
                N: ['some', 'entries', 'are here'],
                O: ['some', 'entries', 'are here'],
                P: ['some', 'entries', 'are here'],
                Q: ['some', 'entries', 'are here'],
                R: ['some', 'entries', 'are here'],
                S: ['some', 'entries', 'are here'],
                T: ['some', 'entries', 'are here'],
                U: ['some', 'entries', 'are here'],
                V: ['some', 'entries', 'are here'],
                W: ['some', 'entries', 'are here'],
                X: ['some', 'entries', 'are here'],
                Y: ['some', 'entries', 'are here'],
                Z: ['some', 'entries', 'are here'],
            }
        };
    }

    static navigationOptions = ({navigation}) => ({
        title: '喵路径',
    })

    Cell() {
        return (
            <View style={{height:30}}>
                <Text>6666000</Text>
            </View>
        );
    }

    SectionItem() {
        return (
            <Text style={{color:'#f00'}}>6666</Text>
        );
    }

    SectionHeader(){
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>55555</Text>
            </View>
        );
    }

    render() {
        return (
            <AlphabetListView
                data={this.state.data}
                cell={this.Cell}
                cellHeight={30}
                sectionListItem={this.SectionItem}
                sectionHeader={this.SectionHeader}
                sectionHeaderHeight={22.5}
            />
        )
    }


}

const styles = StyleSheet.create({
    flex: {

        flexDirection: 'row'
    },
    textStyle:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'700',
        fontSize:16
    },
    viewStyle : {
        backgroundColor: '#ccc'
    }
})


export default Main_Path

