/**
 * 方块卡片组件
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

class MyCard extends Component {

    constructor(props) {
        super(props)
    }


    render() {

        return (
            <View style={styles.card}>
                <View style={{
                    backgroundColor:this.props.bgColor,
                    width: '100%',
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    justifyContent: 'center',
                    height: 28,
                }}>
                    <Text style={styles.title} numberOfLines={2}>{this.props.title}</Text>
                </View>
                <View style={styles.main}>
                    <Text style={styles.name} numberOfLines={2}>{this.props.name}</Text>
                    <Text style={styles.introduce} numberOfLines={3}>{this.props.introduce}</Text>
                    <Text style={styles.count} numberOfLines={1}>{this.props.count}</Text>
                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    center: {
        alignItems: 'center',
        justifyContent: "center"
    },
    card: {
        flex: 1,
        backgroundColor: colors.white,
        marginRight: 15,
        borderRadius: 3,
        shadowColor:colors.black,
        shadowOffset:{width:1,height:1},
        shadowRadius:3,
        shadowOpacity:0.4,
        elevation:4  //android的阴影效果

    },
    title: {
        marginLeft: 8,
        fontSize: 12,
        color: colors.white,
    },
    main: {
        padding: 8,
        height: 140,
    },
    name: {
        lineHeight: 22,
        color: colors.black,
        fontSize: 14,
        marginBottom: 5
    },
    introduce: {
        lineHeight: 20,
        color: colors.tintColor,
        fontSize: 12,
        marginBottom: 5
    },
    count: {
        fontSize: 10,
        textAlign: 'left',
        color: colors.introduce,
        lineHeight: 20
    }
})

export default MyCard;