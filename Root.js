import {AppRegistry, View, Text,} from 'react-native';
import React, {Component} from 'react';
import {Provider}from 'react-redux';
import configureStore from './app/store/ConfigureStore';

const store = configureStore();

import App from './app/App';


export default class Root extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <Provider store={store}>
                <App />
            </Provider>


        );
    }
};

AppRegistry.registerComponent('MyApp', () => Root);


