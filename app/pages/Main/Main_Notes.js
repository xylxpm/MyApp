/**
 * 手记
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View
} from 'react-native';

import RNFS from 'react-native-fs';


let downloadUrl = 'http://www.reactnative.vip/img/reactnative.png';
let downloadUrl_big_file = 'http://www.reactnative.vip/data/dongfang.apk';
let jobId1 = -1;
let testImage1Path = RNFS.PicturesDirectoryPath + '/test-image-11.png';

class Main_Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output: '文档路径' + RNFS.DocumentDirectoryPath,
            btnword: ''
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.basic}><Text style={styles.btn}>列出文件</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.createFile}><Text style={styles.btn}>创建文件</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.delFile}><Text style={styles.btn}>删除文件</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.printPath}><Text style={styles.btn}>输出各种路径</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.downloadFile.bind(this, true, downloadUrl_big_file) }><Text
                    style={styles.btn}>下载文件</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.stopDownload}><Text style={styles.btn}>停止下载</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.getFileInfo}><Text style={styles.btn}>获取文件大小信息</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.uploadFile}><Text style={styles.btn}>上传文件ios</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.stopUpload}><Text style={styles.btn}>停止上传ios</Text></TouchableOpacity>
                <Text style={styles.text}>{this.state.output}</Text>
                <Text style={styles.text}>{this.state.btnword}</Text>
            </View>
        )
    }

    basic = () => {
        RNFS.readDir(RNFS.PicturesDirectoryPath).then((result) => {
            console.log('GET RESULt');
            this.setState({
                btnword: 'GET RESULt'
            })
            return Promise.all([RNFS.stat(result[0].path), result[0].path]);

        }).then((statReuslt) => {
            if (statReuslt[0].isFile()) {
                return RNFS.readFile(statReuslt[1], 'utf8');
            }
            this.setState({
                btnword: 'no file'
            })
            return 'no file';
        }).then((contents) => {
            this.setState({
                btnword: '文件内容：' + contents
            })
        }).catch((err) => {
            this.setState({
                btnword: '错误：' + err.message
            })
        })
    }


    createFile = () => {
        let path = RNFS.PicturesDirectoryPath + '/text.txt';
        RNFS.writeFile(path, '喵喵', 'utf8').then((success) => {
            this.setState({
                btnword: '创建成功' + path
            })
        }).catch((err) => {
            this.setState({
                btnword: '创建错误：' + err.message
            })
        })
    }

    delFile = () => {
        let path = RNFS.PicturesDirectoryPath + '/text.txt';
        RNFS.unlink(path).then(() => {
            this.setState({
                btnword: '删除成功'
            })
        }).catch((err) => {
            this.setState({
                btnword: '删除错误：' + err.message
            })
        })
    }

    printPath = () => {
        this.setState({
            btnword: 'console.log输出'
        })
        console.log('主要bundle目录-' + RNFS.MainBundlePath);//undefined
        console.log('缓存目录-' + RNFS.CachesDirectoryPath);
        console.log('文档目录-' + RNFS.DocumentDirectoryPath);
        console.log('临时目录ios-' + RNFS.TemporaryDirectoryPath);//null
        console.log('外部存储目录android-' + RNFS.ExternalDirectoryPath);
        console.log('图片目录-' + RNFS.PicturesDirectoryPath);

    }

    stopDownload = () => {
        RNFS.stopDownload(jobId1);
    }

    getFileInfo = () => {
        return RNFS.getFSInfo().then(info => {
            this.setState({output: JSON.stringify(info)});
        });
    }

    uploadFile = () => {

    }


    stopUpload = () => {

    }

    downloadFile(background, url) {
        var progress = data => {
            var percentage = ((100 * data.bytesWritten) / data.contentLength) | 0;
            var text = `进度 ${percentage}%`;
            this.setState({ output: text });
        };

        var begin = res => {
            jobId1 = res.jobId;
        };

        var progressDivider = 1;


        RNFS.downloadFile({ fromUrl: url, toFile: testImage1Path, begin, progress, background, progressDivider }).then(res => {
            this.setState({ output: JSON.stringify(res) });
        }).catch(err => this.showError(err));


    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
    },

    text: {
        fontSize: 16,
        textAlign: 'left',
        margin: 10,
    },
    btn: {
        fontSize: 14,
        marginVertical: 6
    }

})


export default Main_Notes