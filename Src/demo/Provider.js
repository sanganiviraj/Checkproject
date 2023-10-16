import React from 'react';
import { Provider } from 'react-redux'; 
import Tailorstore from './store';
import  AppNavigation from './navigation';

function AppTailor() {
  return (
    <Provider store={Tailorstore}>
      <AppNavigation />
    </Provider>
  );
}

export default AppTailor;






