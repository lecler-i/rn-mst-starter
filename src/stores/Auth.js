import {types} from 'mobx-state-tree';

const AuthStore = types.model('AuthStore', {
  name: types.string,
}).views(self => {
  return {};
}).actions(self => {
  return {};
});

export default AuthStore.create({
  name: 'Test',
});
