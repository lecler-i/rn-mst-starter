import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './styles';

class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}

export default Login;
