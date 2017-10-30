import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { inject } from 'mobx-react';

import styles from './styles';

@inject('Auth')
class Splash extends Component {
  // componentDidMount() {
  // if (!this.props.Auth.loggedIn) {
  // Actions.auth();
  // } else {
  // Actions.app();
  // }
  // }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default Splash;
