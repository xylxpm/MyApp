/**
 * 横向卡片 组件
 */
import React, {Component} from 'react';
import {
    TouchableNativeFeedback,
    TouchableHighlight,
    StyleSheet,
    Platform,
    Image,
    Text,
    View
} from 'react-native';

import colors from '../baseComponents/Colors';

class MyHorCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.flex}>
                <View style={{backgroundColor:this.props.bgColor,width:120,height:90,marginTop:5}}></View>
                <View style={styles.main}>
                    <Text style={styles.name} numberOfLines={1}>{this.props.name}</Text>
                    <Text style={styles.introduce} numberOfLines={2}>{this.props.introduce}</Text>
                    <Text style={styles.count} numberOfLines={1}>{this.props.count}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        flexDirection: 'row',

        paddingLeft:15,
        paddingRight:15,
        paddingTop:15,
    },

    main: {
        flex: 1,
        marginLeft:15
    },
    name: {
        lineHeight: 22,
        color: colors.black,
        fontSize: 14,
        marginBottom: 5
    },
    introduce: {
        lineHeight: 22,
        color: colors.tintColor,
        fontSize: 12,
        marginBottom: 5
    },
    count: {
        fontSize: 10,
        textAlign: 'left',
        color: colors.introduce,
        lineHeight: 22
    },

});

export default MyHorCard;