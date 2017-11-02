import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import t from 'tcomb-form-native';
import { Actions } from 'react-native-router-flux';

import Login from './Login';

const loginPayload = t.struct({
  apiUrl: t.String,
  username: t.String,
  password: t.String,
});

const loginFormOptions = {
  auto: 'placeholders',
};

@inject('Auth', 'AppStore') @observer
export default class LoginContainer extends Component {
  onLoginPress = () => {
    const values = this.refs.form.getValue();
    if (values) { // if validation fails, value will be null
      this.props.Auth.login(values).then((res) => {
        if (res) { Actions.app(); }
      });
    }
  }

  render() {
    const { AppStore, Auth } = this.props;
    const { username, password } = this.props.Auth;

    console.log('Api URL from LoginContainer:', AppStore.apiUrl, username);
    return (
      <Login
        LoginForm={<t.form.Form ref="form" keyboardShouldPersistTaps type={loginPayload} value={{ apiUrl: AppStore.apiUrl, username, password }} options={loginFormOptions} />}
        onLoginPress={this.onLoginPress}
      />
    );
  }
}
