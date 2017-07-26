/**
 * 轮播图 组件。使用react-native-swiper
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import colors from '../baseComponents/Colors';

const {width} = Dimensions.get('window');
const height = 160;

let lists = [{
    pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943540744&di=50d6a12eecaad024fc3d661dbc8555e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F9f510fb30f2442a71525d087d543ad4bd11302ec.jpg'
},
    {

        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943561674&di=f8c34d6fb1a4ece7807bde0a2429763e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F07%2F20150807184842_3Yhin.jpeg'
    },
    {

        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943576131&di=3b6f187f402a106feec9eade686fb990&imgtype=0&src=http%3A%2F%2F5.595818.com%2F2014%2Fpic%2F000%2F364%2F883525f3226887a0ad8ce65848c51999.jpg'
    },
    {

        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943619895&di=ffad3f79e684e0f540dad44cc2636f06&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201511%2F14%2F20151114035004_vFC2J.jpeg'
    },
    {

        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490250004595&di=8f35039a9740bb9dbac7a8123951160d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3Dbc92b01493ef76c6d0d2fb23ad16fdf6%2F9e081812b31bb051a156d11d357adab44aede010.jpg'
    },
    {

        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490249971337&di=dcf5647527bfa84d469eb0da5731cc02&imgtype=0&src=http%3A%2F%2Fimg.go007.com%2F2017%2F02%2F21%2F094036d74261eeed_6.jpg'
    }]

class MySwiper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swiperShow: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                swiperShow: true
            });
        }, 0)
    }


    render() {

        var viewList = [];
        for (let i in lists) {
            let row = (
                <View style={styles.imgView} key={i}>
                    <Image source={{uri:lists[i].pic}}
                           style={styles.bannerImg} resizeMode='cover'/>
                </View>
            );
            viewList.push(row);
        }
        if (this.state.swiperShow) {
            return (
                <Swiper style={styles.imgWrapper} height={height}
                        loop={true} autoplay={true} showsButtons={false}
                        dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        activeDot={<View style={{backgroundColor: colors.appColor, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        paginationStyle={{ bottom: 10, left: null, right: 10 }}
                >
                    {viewList}
                </Swiper>
            )
        } else {
            return (
                <View style={styles.flex}>
                    <View style={{height:200}}>
                        <Text>等待</Text>
                    </View>
                </View>
            );
        }

    }
}

const styles = StyleSheet.create({
    imgWrapper: {
        height: height,
    },
    imgView: {
        width: width,
        height: height,
        flex: 1
    },
    bannerImg: {
        width: width,
        height: height,
        flex: 1
    }
})

export default MySwiper;