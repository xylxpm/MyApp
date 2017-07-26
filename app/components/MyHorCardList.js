/**
 * 横向卡片列表
 */
import React, {Component, PropTypes} from 'react';
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
import MyTitle from '../components/MyTitle';

let lists2 = [
    {
        bgColor: '#e91e63',
        name: 'PHP进阶',
        introduce: '喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食零食喵星人零食喵星人零食零食喵星人零食喵星人零食',
        count: 300,
        img: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=072980f9df2a6059461de948495d5ffe/4034970a304e251fc3ec88c8af86c9177f3e53e2.jpg'
    },
    {
        bgColor: '#80DEEA',
        name: '前端小白入门',
        introduce: '喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        count: 300,
        img: 'http://img.mp.itc.cn/upload/20160511/75173ff5bd664ea58d08b85e55294155_th.jpg'
    },
    {
        bgColor: '#AB47BC',
        name: 'Java零基础入门',
        introduce: '喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        count: 300,
        img: 'http://img.mp.itc.cn/upload/20160511/73656acdc23a4e019b1e4baffe32eef2_th.jpg'
    },
    {
        bgColor: '#8BC34A',
        name: '零基础入门Android',
        introduce: '喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        count: 300,
        img: 'http://img1.gtimg.com/astro/pics/hv1/93/224/1731/112615488.jpg'
    },
]

class MyHorCard extends Component {
    static propTypes = {
        img: PropTypes.string,
        bgColor: PropTypes.string,
        name: PropTypes.string,
        introduce: PropTypes.string,
        count: PropTypes.number
    }

    render() {
        const {bgColor, name, introduce, count, img} = this.props;
        return (
            <View style={styles.flex}>
                <View style={{backgroundColor:bgColor,width:120,height:90,marginTop:5}}>
                    <Image source={{ uri: img }} style={styles.catimage}/>
                </View>
                <View style={styles.main}>
                    <Text style={styles.name} numberOfLines={1}>{name}</Text>
                    <Text style={styles.introduce} numberOfLines={2}>{introduce}</Text>
                    <Text style={styles.count} numberOfLines={1}>{count}</Text>
                </View>
            </View>
        )
    }
}

class MyHorCardList extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        let viewList = [];
        for (let i in lists2) {
            let row = (
                <MyHorCard key={i} bgColor={lists2[i].bgColor} name={lists2[i].name}
                           introduce={lists2[i].introduce} count={lists2[i].count} img={lists2[i].img}></MyHorCard>
            );
            viewList.push(row);
        }

        return (
            <View>
                <MyTitle icon="ios-color-filter" colour="#FFB74D" title="职业路径" isChange='false'></MyTitle>

                <View style={styles.hcardlists}>
                    {viewList}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        flexDirection: 'row',

        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
    },

    main: {
        flex: 1,
        marginLeft: 15
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
    hcardlists: {
        marginBottom: 20,
        paddingBottom: 15,
        backgroundColor: colors.white,
    },
    catimage: {
        resizeMode: 'cover',
        width: 120,
        height: 90,
    },

})
export default MyHorCardList;