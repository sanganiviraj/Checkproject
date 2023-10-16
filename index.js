/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Mainhome from './Src/Mainhome';
import Mainnavigation from './Src/Mainnavigation';
import extra from './Src/extra';


AppRegistry.registerComponent(appName, () => Mainnavigation);
