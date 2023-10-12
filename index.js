/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Mainhome from './Src/Mainhome';
import Mainnavigation from './Src/Mainnavigation';


AppRegistry.registerComponent(appName, () => Mainnavigation);
