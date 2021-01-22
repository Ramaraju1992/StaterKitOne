/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/App';
import AppContainer from './src/';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppContainer);
