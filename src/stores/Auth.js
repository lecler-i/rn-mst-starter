import {types, flow, getSnapshot} from 'mobx-state-tree';
import {autorun} from 'mobx';
import remotedev from 'mobx-remotedev';

import TTRSS from '../lib/TTRSS';

const persistStore = ({accessToken, username, password, rememberMe}) => {
  return {lol: 'haha'};
  if (!rememberMe) {return {rememberMe};}
  return {
    rememberMe,
    accessToken,
    username,
    password
  };
};

const AuthStore = types.model('AuthStore', {
  accessToken: types.maybe(types.string),
  username: types.maybe(types.string),
  password: types.maybe(types.string),
  loginError: types.maybe(types.string),
  isLoading: types.optional(types.boolean, false),
  rememberMe: types.optional(types.boolean, true)
}).views(self => {
  return {
  };
})
  .actions(self => {
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
        self.isLoading = true;
        self.accessToken = null;
        if (payload) {
          self.username = payload.username;
          self.password = payload.password;
        }
        if (!self.username || !self.password) {
          self.accessToken = null;
          self.loginError = 'auth.login.missing-login-password';
          self.isLoading = false;
          return false;
        }
        try {
          const {session_id} = yield TTRSS.login(self.username, self.password);
          self.accessToken = session_id;
          self.isLoading = false;
          self.persistStore();
          return true;
        }
        catch (e) {
          self.loginError = `api.error.${e.message}`;
          self.isLoading = false;
          self.password = null;
          return false;
        }
      }),
      postProcessSnapshot: ({accessToken, username, password, rememberMe}) => (
        !rememberMe ? {rememberMe} : {
          rememberMe,
          accessToken,
          username,
          password
        }
      ),
      persistStore: async() => {
        console.log('This is to be persisted', getSnapshot(self));
      }
    };
  });

const instance = AuthStore.create();

export default remotedev(instance);
