/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/StoreConfig'

import App from './App';
import {name as appName} from './app.json';

const store = configureStore()

const RNRedux = () => (
    <Provider store={ store }>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
