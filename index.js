/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Mainhome from './Src/Mainhome';
import Mainnavigation from './Src/Mainnavigation';
import extra from './Src/extra';
import extra2 from './Src/extra2';
import mapview from './Src/Mapexample/mapview';


AppRegistry.registerComponent(appName, () => mapview);
 