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


let downloadUrl = 'http://img.mp.itc.cn/upload/20160511/75173ff5bd664ea58d08b85e55294155_th.jpg';
let downloadUrl_big_file = 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=072980f9df2a6059461de948495d5ffe/4034970a304e251fc3ec88c8af86c9177f3e53e2.jpg';
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
                <TouchableOpacity onPress={this.downloadFilemy.bind(this,true, downloadUrl_big_file) }><Text
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
        if (jobId1 !== -1) {
            RNFS.stopDownload(jobId1);
        } else {
            this.setState({ output: 'There is no download to stop' });
        }
    }

    getFileInfo = () => {
        return RNFS.getFSInfo().then(info => {
            this.setState({output: JSON.stringify(info)});
        });
    }

    uploadFile = () => {
        var uploadUrl = 'http://requestb.in/1mhbfei1';
        var filelists=[
            {
                name: 'test1',
                filename: 'test1.w4a',
                filepath: RNFS.PicturesDirectoryPath + '/test1.w4a',
                filetype: 'audio/x-m4a'
            }, {
                name: 'test2',
                filename: 'test2.w4a',
                filepath: RNFS.PicturesDirectoryPath + '/test2.w4a',
                filetype: 'audio/x-m4a'
            }
        ];

        var uploadBegin = (response) =>{
            var jobId = response.jobId;
            console.log('上传开始! JobId: ' + jobId);
        }

        var uploadProgress = (response) =>{
            var percentage = Math.floor((response.totalBytesSent/response.totalBytesExpectedToSend)*100);
            console.log('已经上传'+percentage+'%');
        }

        RNFS.uploadFiles({
            toUrl:uploadUrl,
            files:filelists,
            method:'POST',
            headers:{
                'Accept': 'application/json',
            },
            fields: {
                'hello': 'world',
            },
            begin:uploadBegin,
            progress:uploadProgress
        }).promise.then((response) => {
            if (response.statusCode == 200) {
                this.setState({output: 'FILES UPLOADED!'});
            } else {
                this.setState({output: 'SERVER ERROR'});
            }
        }).catch((err) => {
            if (err.description === "cancelled") {

            }
            this.setState({output: err});
        });


    }


    stopUpload = () => {
        RNFS.stopUpload(jobId1);
    }

    downloadFilemy(background, url) {
        console.log(background);
        console.log(url);

        var progress = data => {
            var percentage = ((100 * data.bytesWritten) / data.contentLength) | 0;
            var text = `进度 ${percentage}%`;
            this.setState({output: text});
        };

        var begin = res => {
            jobId1 = res.jobId;
        };

        var progressDivider = 1;


        RNFS.downloadFile({
            fromUrl: url,
            toFile: testImage1Path,
            begin,
            progress,
            background,
            progressDivider
        }).promise.then(info => {
            this.setState({output: JSON.stringify(info)});
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