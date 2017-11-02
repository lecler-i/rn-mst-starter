import { types, getSnapshot } from 'mobx-state-tree';
import remotedev from 'mobx-remotedev';

import { save } from '../utils/storage';

const AppStore = types.model('AppStore', {
  apiUrl: types.maybe(types.string),
  isLoading: types.optional(types.boolean, true),
}).views(self => ({}))
  .actions(self => ({
    postProcessSnapshot: ({ apiUrl }) => ({ apiUrl }),
    setApiUrl: (url) => {
      self.apiUrl = url;
      save('AppStore', getSnapshot(self));
    },
    loaded: () => {
      self.isLoading = false;
      return true;
    },
  }));

const instance = AppStore.create({
});

export default remotedev(instance);
