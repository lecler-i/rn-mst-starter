import React, {Component} from 'react';
import {inject} from 'mobx-react/native';
import t from 'tcomb-form-native';
import {Actions} from 'react-native-router-flux';

import Login from './Login';

const loginPayload = t.struct({
  apiUrl: t.String,
  username: t.String,
  password: t.String
});

const loginFormOptions = {
  auto: 'placeholders'
};

@inject('Auth')
export default class LoginContainer extends Component {

  onLoginPress = () => {
    const values = this.refs.form.getValue();
    if (values) { // if validation fails, value will be null
      this.props.Auth.login(values).then((res) => {
        if (res) {Actions.app();}

      });
    }
  }

  render() {
    return (
      <Login
        LoginForm={<t.form.Form ref='form' keyboardShouldPersistTaps type={loginPayload} options={loginFormOptions}/>}
        onLoginPress={this.onLoginPress}
      />
    );
  }
}
