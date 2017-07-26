/**
 * 路径页面
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


class Main_Path extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <View style={styles.flex}>
                <Text>路径页面</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },

})




export default Main_Path