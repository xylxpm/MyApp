/**
 * Created by xylxpm on 2017/7/27.
 */
import React from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';

import {
    ThinGrayLine,
    ThickGrayLine,
} from './FoldViewLines';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#BDC2C9',
    },
});

export default ({ onPress }) => (
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <ThickGrayLine width={60} />
            <ThinGrayLine width={120} />
        </View>

        <View style={{ flex: 1 }}>
            <ThickGrayLine width={60} onPress={onPress} />
            <ThinGrayLine width={120} />
        </View>
    </View>
);