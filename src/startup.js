import { applySnapshot } from 'mobx-state-tree';

import stores from './stores/';
import { load } from './utils/storage';

const loadingPromises = Object.entries(stores).map(([key, store]) => load(key).then((data) => {
  console.log('Applying state for ', key, store, data);
  applySnapshot(store, data);
}).catch(Promise.resolve));

export default async () => new Promise.all(loadingPromises).then(stores.AppStore.loaded);
