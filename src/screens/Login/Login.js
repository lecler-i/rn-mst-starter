import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import {observer, inject} from 'mobx-react/native';

import Button from '../../components/ui/Button';
import i18n from '../../utils/i18n';
import styles from './styles';

@inject('Auth') @observer
class Login extends Component {

  render() {
    const {Auth} = this.props;

    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        {Auth.loginError && <Text>Error : {i18n.t(Auth.loginError)}</Text> }
        <Button
          onPress={() => Auth.login()}
          loading={Auth.isLoading}
        >
          <Text>TEST</Text>
        </Button>
      </View>
    );
  }
}

export default Login;
