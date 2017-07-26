/**
 * 某个课程的详情
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


class Category_Detail extends Component{
    constructor(props){
        super(props)
    }
    static navigationOptions = ({navigation}) => ({
        title: '课程的详情',

    })


    render(){
        return(
            <View style={styles.flex}>
                <Text>某个课程的详情</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },

})




export default Category_Detail