/**
 * 方形卡片列表
 */


import React, {Component,PropTypes} from 'react';
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

let lists = [
    {
        bgColor:'#e91e63',
        title:'PHP',
        name:'喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食',
        introduce:'喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食零食喵星人零食喵星人零食零食喵星人零食喵星人零食',
        count:300
    },
    {
        bgColor:'#80DEEA',
        title:'JAVA',
        name:'喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        introduce:'喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        count:300
    },
    {
        bgColor:'#AB47BC',
        title:'前端工具',
        name:'喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        introduce:'喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        count:300
    },
    {
        bgColor:'#8BC34A',
        title:'REACT',
        name:'喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        introduce:'喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        count:300
    },
]

class MyCard extends Component {

    static propTypes = {
        bgColor: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
        introduce: PropTypes.string,
        count: PropTypes.number
    }


    render() {
        const {bgColor, title,name,introduce,count} = this.props;
        return (
            <View style={styles.card}>
                <View style={{
                    backgroundColor:bgColor,
                    width: '100%',
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    justifyContent: 'center',
                    height: 28,
                }}>
                    <Text style={styles.title} numberOfLines={2}>{title}</Text>
                </View>
                <View style={styles.main}>
                    <Text style={styles.name} numberOfLines={2}>{name}</Text>
                    <Text style={styles.introduce} numberOfLines={3}>{introduce}</Text>
                    <Text style={styles.count} numberOfLines={1}>{count}</Text>
                </View>
            </View>
        )
    }

}

class MyCardList extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        let viewList = [];
        for (let i in lists) {
            if (i % 2 === 0) {

                let row = (
                    <View style={styles.cardlists} key={i}>
                        <MyCard bgColor={lists[i].bgColor} title={lists[i].title} name={lists[i].name}  introduce={lists[i].introduce} count={lists[i].count}></MyCard>
                        <MyCard bgColor={lists[parseInt(i) + 1].bgColor} title={lists[parseInt(i) + 1].title} name={lists[parseInt(i) + 1].name}  introduce={lists[parseInt(i) + 1].introduce} count={lists[parseInt(i) + 1].count}></MyCard>

                    </View>
                );
                viewList.push(row);
            }
        }

        return (
            <View style={styles.cardContainer}>
                <MyTitle icon="ios-color-palette" colour="#40C4FF" title="课程推荐" isChange="true"></MyTitle>
                {viewList}

            </View>
        )
    }

}

const styles = StyleSheet.create({
    cardContainer:{
        paddingTop:15,
    },
    cardlists: {
        flexDirection: 'row',
        paddingLeft:15,
        paddingBottom:15,

    },
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
        height: 155,
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
    }

})
export default MyCardList;