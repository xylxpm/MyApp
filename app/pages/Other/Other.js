/**
 * 关于  页面
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    Linking
} from 'react-native';

class CustonButtom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: ''
        }
    }

    static propTypes = {
        url: React.PropTypes.string,
        text: React.PropTypes.string.isRequired
    }

    render() {
        return (
            <TouchableOpacity style={styles.button}
                              onPress={()=>{
                    Linking.canOpenURL(this.props.url).then(supported=>{
                        if(supported){
                            Linking.openURL(this.props.url);
                        }else{
                            this.setState({ txt: '无法打开：'+this.props.url })
                        }
                    })
                }}
            >
                <Text style={styles.buttonText}>{this.props.text}</Text>
                <Text style={styles.buttonText}>{this.state.txt}</Text>
            </TouchableOpacity>
        )
    }
}

class Other extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'other一些实例',
    })

    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }
    }

    componentDidMount() {
        var url = Linking.getInitialURL().then((url) => {
            if (url) {
                this.setState({
                    word: '捕捉到URL：' + url
                })
            } else {
                console.log('33333');
                this.setState({
                    word: 'url为空'
                })
            }
        }).catch(err => {
            this.setState({
                word: '错误：' + err
            })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <CustonButtom url={'http://www.baidu.com'} text='打开http页面'></CustonButtom>
                <CustonButtom url={'https://www.baidu.com'} text='打开https页面'></CustonButtom>
                <CustonButtom url={'smsto:18910640944'} text='发信息'></CustonButtom>
                <CustonButtom url={'tel:18910640944'} text='打电话'></CustonButtom>
                <CustonButtom url={'mailto:18910640944@163.com'} text='发邮件'></CustonButtom>
                <CustonButtom url={'cat://cat.xylxpm/data'} text='再次打开自己'></CustonButtom>
                <CustonButtom url={'catee:111'} text='错误的url'></CustonButtom>
                <Text>{this.state.word}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        padding: 5,
        textAlignVertical: 'top'
    },
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    buttonText: {
        fontSize: 14
    }
})

export default Other;