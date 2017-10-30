import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { observer, inject } from 'mobx-react/native';

import Button from '../../components/ui/Button';
import i18n from '../../utils/i18n';
import styles from './styles';

@inject('Auth') @observer
class Login extends Component {
  render() {
    const { Auth, LoginForm, onLoginPress } = this.props;

    return (
      <View style={styles.container}>
        {Auth.loginError && <Text>Error : {i18n.t(Auth.loginError)}</Text> }
        <View style={styles.formWrapper}>
          {LoginForm}
        </View>
        <Button
          onPress={onLoginPress}
          loading={Auth.isLoading}
        >
          <Text>Login</Text>
        </Button>
      </View>
    );
  }
}

export default Login;
