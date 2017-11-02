import { types, getSnapshot } from 'mobx-state-tree';
import remotedev from 'mobx-remotedev';

import { save } from '../utils/storage';

const AppStore = types.model('AppStore', {
  apiUrl: types.maybe(types.string),
  isLoading: types.boolean,
}).views(self => ({}))
  .actions(self => ({
    postProcessSnapshot: ({ apiUrl }) => ({ apiUrl }),
    setApiUrl: (url) => {
      self.apiUrl = url;
      save('AppStore', getSnapshot(self));
    },
    loaded: () => {
      self.isLoading = false;
    },
  }));

const instance = AppStore.create({
  isLoading: true,
});

export default remotedev(instance);
