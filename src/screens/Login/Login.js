import React, {Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import {observer, inject} from 'mobx-react/native';

import i18n from '../../utils/i18n';
import styles from './styles';

@inject('Auth') @observer
class Login extends Component {

  render() {
    const {Auth} = this.props;

    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        {Auth.loginError && <Text>Error : {i18n.t(`Api.errors.${Auth.loginError}`)}</Text> }
        <Button
          onPress={() => Auth.login()}
          title='Login'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
      </View>
    );
  }
}

export default Login;
