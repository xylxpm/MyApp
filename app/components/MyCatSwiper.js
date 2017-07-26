/**
 * 横向滚动列表
 */

import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Dimensions, Platform, Text, TouchableOpacity,
    Image
} from 'react-native';

import Carousel from 'react-native-snap-carousel';


const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.2;
const slideWidth = wp(40);
const itemHorizontalMargin = wp(2);
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

const ENTRIES1 = [
    {
        title: '布偶猫',
        illustration: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=072980f9df2a6059461de948495d5ffe/4034970a304e251fc3ec88c8af86c9177f3e53e2.jpg'
    },
    {
        title: '金渐层英短',
        illustration: 'http://img.mp.itc.cn/upload/20160511/75173ff5bd664ea58d08b85e55294155_th.jpg'
    },
    {
        title: '蓝白英短',
        illustration: 'http://img.mp.itc.cn/upload/20160511/73656acdc23a4e019b1e4baffe32eef2_th.jpg'
    },
    {
        title: '暹罗猫',
        illustration: 'http://img1.gtimg.com/astro/pics/hv1/93/224/1731/112615488.jpg'
    },
    {
        title: '挪威森林猫',
        illustration: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=13487e5d5aafa40f28cbc68fca0d682a/37d3d539b6003af35a3f150f352ac65c1138b6dc.jpg'
    },
    {
        title: '美国短毛猫',
        illustration: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=59622d50a61ea8d39e2f7c56f6635b2b/267f9e2f0708283875a846ffb899a9014d08f1b0.jpg'
    },
    {
        title: '阿比西尼亚猫',
        illustration: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=2c4a18b50924ab18f41be96554938da8/0b46f21fbe096b638808a3c30c338744ebf8ac14.jpg'
    }
];


class CatLists extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        illustration: PropTypes.string
    };

    render() {
        const {title, illustration} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.7} style={styles.slideInnerContainer}>
                <View style={styles.catimageContainer}>
                    <Image source={{ uri: illustration }} style={styles.catimage}/>
                </View>

                <View style={styles.cattextContainer }>
                    <Text style={ styles.catsubtitle} numberOfLines={1}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

class MyCatSwiper extends Component {
    constructor(props) {
        super(props);
    }

    getSlides(entries) {
        if (!entries) {
            return false;
        }

        return entries.map((entry, index) => {
            return (
                <CatLists
                    key={index}

                    {...entry}
                />

            );
        });
    }

    render() {
        return (

                <Carousel
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    firstItem={1}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    enableMomentum={false}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContainer}
                    showsHorizontalScrollIndicator={false}
                    snapOnAndroid={true}
                    removeClippedSubviews={false}
                >
                    { this.getSlides(ENTRIES1) }
                </Carousel>

        )
    }
}


const styles = StyleSheet.create({

    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
    },
    catimageContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },

    catimage: {
        resizeMode: 'cover',
        borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
        width: slideWidth,
        height: slideHeight,
    },
    cattextContainer: {
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },
    catsubtitle: {
        marginTop: 5,
        marginBottom: 15,
        backgroundColor: 'transparent',
        color: 'rgba(0, 0, 0, 0.75)',
        fontSize: 14,
        textAlign: 'center'
    },
})
export default MyCatSwiper;
