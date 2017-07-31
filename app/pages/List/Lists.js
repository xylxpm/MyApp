/**
 * 列表  页面
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    ListView,
    InteractionManager,
    RefreshControl,
    Platform,
    Image
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {
    getProductList,
    changeProductListRefreshing,
    changeProductListLoadingMore
} from '../../actions/ListAction';
import colors from '../../baseComponents/Colors';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';

let _pageNo = 1;
const _pageSize = 30;
const {width, height} = Dimensions.get('window');


class LoadMoreFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.footer}>
                <Text style={styles.footerTitle}>{this.props.isLoadAll ? '已加载全部' : '正在加载更多……'}</Text>
            </View>
        )
    }
}

class ProductCell extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const {rowData, rowID, sectionID} = this.props;

        return (
            <TouchableHighlight>
                <View style={ styles.cellContiner }>
                    <Image style={ styles.image } source={{uri: `https:${rowData.imagePath}`}}/>
                    <View style={ styles.textPart }>
                        <Text style={ styles.productName }
                              numberOfLines={2}>({ rowID - 0 + 1 }).{ rowData.productName }</Text>
                        <Text style={ styles.companyName } numberOfLines={1}>{ rowData.companyName }</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}


class Lists extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '喵列表',
        tabBarIcon: ({tintColor, focused}) => (
            <Ionicons
                name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
                size={26}
                style={{ color: tintColor }}
            />
        ),
    })

    constructor(props) {
        super(props);
    }

    _onRefresh() {
        this.props.getProductList(1);
    }

    _loadMoreData() {
        const ListReducer = this.props.ListReducer;
        this.props.changeProductListLoadingMore(true);
        _pageNo = parseInt(ListReducer.products.length / _pageSize) + 1;
        this.props.getProductList(_pageNo);
    }

    _toEnd() {
        const ListReducer = this.props.ListReducer;
        // console.log("加载更多？ ",userReducer.isLoadingMore, userReducer.products.length, userReducer.totalProductCount,userReducer.isRefreshing);
        //ListView滚动到底部，根据是否正在加载更多 是否正在刷新 是否已加载全部来判断是否执行加载更多
        if (ListReducer.isLoadingMore || ListReducer.products.length >= ListReducer.totalProductCount || ListReducer.isRefreshing) {
            return;
        }
        ;
        InteractionManager.runAfterInteractions(() => {
            console.log("触发加载更多 toEnd() --> ");
            this._loadMoreData();
        });
    }

    _renderFooter() {
        const ListReducer = this.props.ListReducer;
        //通过当前product数量和刷新状态（是否正在下拉刷新）来判断footer的显示
        if (ListReducer.products.length < 1 || ListReducer.isRefreshing) {
            return null
        }
        ;
        if (ListReducer.products.length < ListReducer.totalProductCount) {
            //还有更多，默认显示‘正在加载更多...’
            return <LoadMoreFooter />
        } else {
            // 加载全部
            console.log(ListReducer.isLoadingMore);
            return <LoadMoreFooter isLoadAll={true}/>
        }
    }

    componentDidMount() {
        this.props.getProductList(_pageNo);
    }

    render() {
        const ListReducer = this.props.ListReducer;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (

            <SwipeListView
                dataSource={ ds.cloneWithRows(ListReducer.products) }
                renderRow={ (rowData,SectionId,rowID) => {
						return <ProductCell rowData={rowData} rowID={ rowID } />
					} }

                onEndReached={ this._toEnd.bind(this) }
                onEndReachedThreshold={10}
                renderFooter={ this._renderFooter.bind(this) }
                enableEmptySections={true}
                refreshControl={
						<RefreshControl
							refreshing={ ListReducer.isRefreshing }
							onRefresh={ this._onRefresh.bind(this) }
							tintColor="gray"
							colors={['#ff0000', '#00ff00', '#0000ff']}
							title="Loading..."
							progressBackgroundColor="gray"/>
						}
                renderHiddenRow={ (data, secId, rowId, rowMap) => (
							<View style={styles.rowBack}>
								<TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} activeOpacity={0.7}>
									<Text style={styles.backTextWhite}>标记</Text>
								</TouchableOpacity>
								<TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} activeOpacity={0.7}>
									<Text style={styles.backTextWhite}>删除</Text>
								</TouchableOpacity>
							</View>
						)}
                rightOpenValue={-150}
                disableRightSwipe={true}
            />

        )
    }

}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderTopWidth: 1,
        borderTopColor: colors.tintColor,
    },
    footerTitle: {
        marginLeft: 10,
        fontSize: 15,
        color: 'gray'
    },
    cellContiner: {
        height: 90,
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: colors.introduce,
        alignItems: 'center',
        backgroundColor: colors.white
    },
    productName: {
        fontSize: 14,
        color: 'black',
    },
    image: {
        width: 90,
        height: 55,
        marginLeft: 10,
        borderRadius: 4
    },
    textPart: {
        marginLeft: 10,
        width: width - 90 - 30,
    },
    companyName: {
        marginTop: 4,
        fontSize: 12,
        color: 'gray',
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75
    },
    backRightBtnLeft: {
        backgroundColor: colors.introduce,
        right: 75
    },
    backRightBtnRight: {
        backgroundColor: colors.pink,
        right: 0
    },
    backTextWhite: {
        color: '#FFF'
    },
})

export default connect((state) => {
    const {ListReducer} = state;
    const routes = state.nav.routes;
    return {
        ListReducer,
        routes
    };
}, {getProductList, changeProductListRefreshing, changeProductListLoadingMore})(Lists)