/**
 * 实战页面
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


class Main_Combat extends Component{
    constructor(props){
        super(props)
    }
    static navigationOptions = ({navigation}) => ({
        title: '喵实战',

    })


    render(){
        return(
            <View style={styles.flex}>
               <Text>实战页面</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },

})




export default Main_Combat