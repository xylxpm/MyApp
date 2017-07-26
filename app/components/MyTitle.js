/**
 * 标题组件
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import colors from '../baseComponents/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

class MyTitle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let row = null;
        if(this.props.isChange =="true"){
            row = (<Text style={[styles.text,styles.center]}>换一换</Text>)
        }

        return (
            <View style={[styles.flex,styles.padd]}>
                <View style={[styles.flex,styles.center]}>
                    <Ionicons name={this.props.icon} size={22} style={{ color: this.props.colour,marginRight:10}}/>
                    <Text>{this.props.title}</Text>
                </View>
                {row}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    padd: {
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 15,
    },

    flex: {
        flex: 1,
        flexDirection: 'row',
    },

    center: {
        alignItems: 'center',
        justifyContent: "center",
    },

    text: {
        fontSize:12,
        color:colors.tintColor,
        marginTop:5,
        position:'absolute',right:18
    }

})

export default MyTitle
