/**
 * 实战页面
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SectionList,
    ActivityIndicator
} from 'react-native';


const dataSource = [
    {data:[{name:'nader0'},{name:'chris0'},{name:'nader1'},{name:'chris2'},{name:'nader3'},{name:'chris4'},{name:'nader5'},{name:'chris'}],key:'A'},
    {data:[{name:'nader0'},{name:'chris0'},{name:'nader1'},{name:'chris2'},{name:'nader3'},{name:'chris4'},{name:'nader5'},{name:'chris'}],key:'B'},
    {data:[{name:'nader0'},{name:'chris0'},{name:'nader1'},{name:'chris2'},{name:'nader3'},{name:'chris4'},{name:'nader5'},{name:'chris'}],key:'C'},
    {data:[{name:'nader0'},{name:'chris0'},{name:'nader1'},{name:'chris2'},{name:'nader3'},{name:'chris4'},{name:'nader5'},{name:'chris'}],key:'D'},
    {data:[{name:'nader0'},{name:'chris0'},{name:'nader1'},{name:'chris2'},{name:'nader3'},{name:'chris4'},{name:'nader5'},{name:'chris'}],key:'E'},
    {data:[{name:'nader0'},{name:'chris0'},{name:'nader1'},{name:'chris2'},{name:'nader3'},{name:'chris4'},{name:'nader5'},{name:'chris'}],key:'F'},
    {data:[{name:'nader0'},{name:'chris0'},{name:'nader1'},{name:'chris2'},{name:'nader3'},{name:'chris4'},{name:'nader5'},{name:'chris'}],key:'G'},
    {data:[{name:'nader0'},{name:'chris0'},{name:'nader1'},{name:'chris2'},{name:'nader3'},{name:'chris4'},{name:'nader5'},{name:'chris'}],key:'H'},
    {data:[{name:'nader0'},{name:'chris0'},{name:'nader1'},{name:'chris2'},{name:'nader3'},{name:'chris4'},{name:'nader5'},{name:'chris'}],key:'K'}
];

class Main_Combat extends Component{
    constructor(props){
        super(props);
        this.state={
            isRefresh:false
        }
    }
    static navigationOptions = ({navigation}) => ({
        title: '喵实战',

    })
    renderItem = (item) => {
        return <Text style={styles.text}>{item.item.name}</Text>
    }

    renderHeader = (headerItem) => {
        return <Text style={styles.header}>{headerItem.section.key}</Text>
    }

    _renderTableHeader =()=>{
        return(
            <TouchableOpacity style={{ marginTop:10}}   activeOpacity={0.8} >
                <Text>基础SectionList</Text>
            </TouchableOpacity>

        )
    }

    render(){
        return(
            <View style={styles.container}>
                <SectionList

                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderHeader}
                    sections={dataSource}
                    keyExtractor={(item)=>item.name}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    loadDataStyle:{
        marginVertical:20,
        marginTop:20
    },

})




export default Main_Combat