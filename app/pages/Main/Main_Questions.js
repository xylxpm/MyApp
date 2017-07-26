/**
 * 猿问
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


class Main_Questions extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <View style={styles.flex}>
                <Text>猿问页面</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },

})




export default Main_Questions