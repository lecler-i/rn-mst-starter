import React from 'react';
import {Router, Tabs, Drawer, Scene, Stack, Lightbox} from 'react-native-router-flux';
import {observer} from 'mobx-react/native';

import stores from './stores';

import SplashScreen from './screens/Splash';
import LoginScreen from './screens/Login';

import configs from './configs';

export default () => (
  <Router wrapBy={observer}>
    <Lightbox key='root'>
      <Scene key='splash' intial component={SplashScreen} />

      <Scene key='auth'>
        <Scene key='login' component={LoginScreen} />
      </Scene>
    </Lightbox>
  </Router>
);

