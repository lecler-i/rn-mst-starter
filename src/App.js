import React from 'react';
import { Router, Tabs, Drawer, Scene, Stack, Lightbox, NavigationStore } from 'react-native-router-flux';
import { observer, Provider } from 'mobx-react/native';

import stores from './stores';
import configs from './configs';
import DrawerContent from './components/DrawerContent';

// ## Generated Screens Imports
import HomeScreen from './screens/Home';
import SplashScreen from './screens/Splash';
import LoginScreen from './screens/Login';

import startup from './startup';

export default () => (
  <Provider {...stores} >
    <Router wrapBy={observer}>
      <Lightbox key="root">
        <Stack {...configs.AppConfig.navbarProps} headerMode="screen">
          <Scene key="splash" intial on={() => startup().then(stores.Auth.isLoggedIn)} success="app" error="login" hideNavBar failure="auth" component={SplashScreen} />

          <Stack key="auth" type="reset">
            <Scene key="login" hideNavBar component={LoginScreen} />
          </Stack>

          <Drawer key="app" type="reset" contentComponent={DrawerContent} hideNavBar >
            <Scene key="home" component={HomeScreen} />
            <Scene key="config" component={HomeScreen} />
          </Drawer>
        </Stack>
      </Lightbox>
    </Router>
  </Provider>
);

