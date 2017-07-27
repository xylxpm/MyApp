/**
 * 某个课程的列表
 */
import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ListView,
    PixelRatio,
    StyleSheet,
    Text,
    Platform,
    View,
} from 'react-native';

const window = Dimensions.get('window');
const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 200;
const STICKY_HEADER_HEIGHT = 60;
import colors from '../../baseComponents/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ParallaxScrollView from 'react-native-parallax-scroll-view';


class Category_List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows([
                'Simplicity Matters',
                'Hammock Driven Development',
                'Value of Values',
                'Are We There Yet?',
                'The Language of the System',
                'Design, Composition, and Performance',
                'Clojure core.async',
                'The Functional Database',
                'Deconstructing the Database',
                'Hammock Driven Development',
                'Value of Values'
            ])
        };
    }

    static navigationOptions = ({navigation}) => ({
        header: null
    })


    render() {
        const {
            onScroll = () => {
            }
        } = this.props;
        return (
            <View style={styles.container}>
                <ListView
                    ref="ListView"
                    style={styles.container}
                    dataSource={ this.state.dataSource }
                    renderRow={(rowData) => (
                  <View key={rowData} style={ styles.row }>
                    <Text style={ styles.rowText }>
                      { rowData }
                    </Text>
                  </View>
                 )}
                    renderScrollComponent={props => (
                  <ParallaxScrollView
                    onScroll={onScroll}
                    backgroundColor={colors.appColor}
                    stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
                    parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
                    backgroundSpeed={10}

                    renderBackground={() => (
                      <View key="background">

                        <Image source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943576131&di=3b6f187f402a106feec9eade686fb990&imgtype=0&src=http%3A%2F%2F5.595818.com%2F2014%2Fpic%2F000%2F364%2F883525f3226887a0ad8ce65848c51999.jpg',
                                        width: window.width,
                                        height: PARALLAX_HEADER_HEIGHT}}/>
                        <View style={{position: 'absolute',
                                      top: 0,
                                      width: window.width,
                                      backgroundColor: 'rgba(0,0,0,.4)',
                                      height: PARALLAX_HEADER_HEIGHT}}/>
                      </View>
                    )}

                    renderForeground={() => (
                      <View key="parallax-header" style={ styles.parallaxHeader }>


                        <Text style={ styles.sectionSpeakerText }>
                          {this.props.navigation.state.params.title}
                        </Text>

                      </View>
                    )}

                    renderStickyHeader={() => (
                      <View key="sticky-header" style={styles.stickySection}>
                        <Text style={styles.stickySectionText}>{this.props.navigation.state.params.title}</Text>
                      </View>
                    )}

                   />
                )}
                />
                <Ionicons
                    onPress={() => this.props.navigation.goBack()}
                    name={'ios-arrow-back'}
                    size={36}
                    style={styles.closeicon }
                />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    closeicon: {
        color: colors.white,
        position: 'absolute',
        left: 10,
        top: 20,
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        width: 300,
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
        margin: 10
    },
    fixedSection: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    fixedSectionText: {
        color: '#999',
        fontSize: 20
    },
    parallaxHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 50
    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 24,
        paddingVertical: 5
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 5
    },
    row: {
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 20
    }

})


export default Category_List