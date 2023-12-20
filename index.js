/**
 * @format
 */

import {AppRegistry, AppState, BackHandler} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Mainhome from './Src/Mainhome';
import Mainnavigation from './Src/Mainnavigation';
import messaging from '@react-native-firebase/messaging';
import Notificationwithfirebase from './Src/APIexample/Notificationwithfirebase';
import welcomescreen from './Src/Aichatbot/welcomescreen';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  messaging().getInitialNotification(async remoteMessage => {
    console.log('Message in KILL state mode' , remoteMessage);
  })
AppRegistry.registerComponent(appName, () => welcomescreen);
 