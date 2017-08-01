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

var {width, height} = Dimensions.get('window');
var sectionData = [];
var dataAry = [];

import linkageData from '../../res/linkage.json'

class LeftFlatList extends Component {
    constructor(props) {
        super(props);
        dataAry = this.props.data.datatags;
        this.state = {
            dataAry: dataAry,
            cell: 0
        }
    }

    render() {
        return (
            <FlatList
                ref="flatlist"
                style={{width:80}}
                data={this.state.dataAry}
                renderItem={(item)=>this._renderItem(item)}
                ItemSeparatorComonent={()=>{return(<View style={{height:1,backBehavior:'cyan'}}></View>)}}
                keyExtractor={this._keyExtractor}
            />
        )
    }


    _renderItem = (item) => {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={()=>this._cellAction(item)}>
                <View style={{height:60,flexDirection:'row',alignItems:'center'}}>
                    <View
                        style={{height:60,width:5,backgroundColor:item.index == this.state.cell?'red':'black'}}></View>
                    <Text style={{marginLeft:20}}>{item.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _keyExtractor(item: Object, index: number) {
        return item.title;
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    componentWillMount() {
        this.listener = DeviceEventEmitter.addListener('right', (e) => {
            this.refs.flatlist.scrollToIndex({animated: true, index: e - 1})
            this.setState({
                cell: e - 1
            })
        })
    }

    _cellAction = (item) => {
        if (item.index < this.state.dataAry.length - 1) {
            this.setState({
                cell: item.index
            })
            DeviceEventEmitter.emit('left', item.index);
        }
    }


}


class RightSectionList extends Component {
    constructor(props) {
        super(props);
        sectionData = this.props.data.datatags;
        this.state = {
            sectionData: sectionData
        }
    }

    renderItem = (item) => {
        return (
            <View style={{height:60,justifyContent:'center',marginLeft:15}}>
                <Text>{item.item.name}</Text>
            </View>
        )
    }

    sectionComp = (section) => {
        return (
            <View style={{height:30,backgroundColor:'#dedede',justifyContent:'center',alignItems:'center'}}>
                <Text>{section.section.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <SectionList
                ref='sectionList'
                style={{width:width-80}}
                renderSectionHeader={(section)=>this.sectionComp(section)} //头
                renderItem={(item)=>this.renderItem(item)} //行
                ItemSeparatorComponent={()=>{return(<View style={{height:1,backgroundColor:'black'}}/>)}}//分隔线
                sections={this.state.sectionData} //数据
                onViewableItemsChanged={(info)=>this.itemChange(info)}  //滑动时调用
            />
        )
    }

    componentDidMount() {
        this.listener = DeviceEventEmitter.addListener('left', (e) => {
            if (e > 0) {
                var count = 0;
                for (var i = 0; i < e; i++) {
                    count += sectionData[i].data.length + 1;
                }
                this.refs.sectionList.scrollToIndex({animated: true, index: count})
            } else {
                this.refs.sectionList.scrollToIndex({animated: true, index: 0})
            }
        })
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    itemChange = (info) => {
        let title = info.viewableItems[0].item.title
        var reg = new RegExp("^[0-9]*$");
        if (reg.test(title)) {
            DeviceEventEmitter.emit('right', title); //发监听
        }
    }

}


class Main_Path extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({navigation}) => ({
        title: '喵路径',

    })

    render() {
        return (
            <View style={styles.flex}>
                <LeftFlatList data={linkageData}/>
                <RightSectionList data={linkageData}/>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    flex: {

        flexDirection: 'row'
    },

})


export default Main_Path