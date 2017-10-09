import {AppRegistry, View, Text,} from 'react-native';
import React, {Component} from 'react';
import {Provider}from 'react-redux';
import configureStore from './app/store/ConfigureStore';

const store = configureStore();

import App from './app/App';


export default class Root extends Component {
    constructor(props){
        super(props);
        this.state={
            store:null
        }
    }
    componentDidMount(){
        const store = getStore();
        this.setState({
            store:store
        })
    }

    render() {
        if(!this.state.store){
            return(
                <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center',}}>
                    <Text>正在加载store。。。</Text>
                </View>
            )
        }
        return (
            <Provider store={this.state.store}>
                <App />
            </Provider>


        );
    }
};

AppRegistry.registerComponent('MyApp', () => Root);


