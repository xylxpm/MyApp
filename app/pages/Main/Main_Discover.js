/**
 * 发现
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


class Main_Discover extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <View style={styles.flex}>
                <Text>发现</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },

})




export default Main_Discover