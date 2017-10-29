import {types, flow} from 'mobx-state-tree';

import TTRSS from '../lib/TTRSS';

const AuthStore = types.model('AuthStore', {
  accessToken: types.maybe(types.string),
  username: types.maybe(types.string),
  password: types.maybe(types.string),
  loginError: types.maybe(types.string)
}).views(self => {
  return {
  };
}).actions(self => {
  return {
    isLoggedIn: flow(function* isLoggedIn() {
      if (self.accessToken && 1/* Api.isLoggedIn() */) {
        return true;
      } else {
        self.accessToken = null;
      }
      if (self.username && self.password && (yield self.login())) {
        return true;
      }
      self.loginError = null;
      return false;
    }),
    login: flow(function* login(payload) {
      self.loginError = null;
      self.accessToken = null;
      if (payload) {
        self.username = payload.username;
        self.password = payload.password;
      }
      if (!self.username || !self.password) {
        self.accessToken = null;
        self.loginError = 'missing-login-password';
        return false;
      }
      try {
        console.log('Sending stuff ', self.login, self.password);
        const {session_id} = yield TTRSS.login(self.username, self.password);
        self.accesssToken = session_id;
        console.log(self.accessToken);
        return true;
      }
      catch (e) {
        console.error('Toto :', e.message);
        self.loginError = e.message;
        //self.password = null;
        return false;
      }
    })
  };
});

export default AuthStore.create({
  username: 'tata',
  password: 'prout'
});
