/**
 * 按钮（上图下文） 组件。
 */
import React, {Component} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Platform,
    Image,
    Text,
    View
} from 'react-native';

import colors from '../baseComponents/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

class MyMenuBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <TouchableOpacity style={[styles.flex,styles.center]} onPress={this.props.onPress}>
                <Ionicons
                    name={this.props.icon}
                    size={36}
                    style={styles.img }
                />
                <Text style={[styles.text,styles.center]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    text: {
        fontSize: 12,
        color: colors.black,
    },
    img: {
        color: colors.appColor
    },
    center: {
        alignItems: 'center',
        justifyContent: "center"
    },

})

export default MyMenuBtn;