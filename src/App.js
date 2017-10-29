import React from 'react';
import {Router, Tabs, Drawer, Scene, Stack, Lightbox} from 'react-native-router-flux';
import {observer, Provider} from 'mobx-react/native';

import stores from './stores';

// ## Generated Screens Imports
import HomeScreen from './screens/Home';
import SplashScreen from './screens/Splash';
import LoginScreen from './screens/Login';

import configs from './configs';

export default () => (
  <Provider {...stores}>
    <Router wrapBy={observer}>
      <Lightbox key='root'>
        <Stack {...configs.AppConfig.navbarProps} headerMode='screen'>
          <Scene key='splash' intial on={stores.Auth.isLoggedIn} success='app' error='login' hideNavBar failure='auth' component={SplashScreen}/>

          <Stack key='auth' type='reset'>
            <Scene key='login' hideNavBar component={LoginScreen} />
          </Stack>

          <Stack key='app' type='reset' hideNavBar>
            <Scene key='home' component={HomeScreen} />
          </Stack>
        </Stack>
      </Lightbox>
    </Router>
  </Provider>
);

