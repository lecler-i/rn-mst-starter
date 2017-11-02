import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

const storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

export const save = (key, data) => storage.save({ key, data });

export const load = (key) => {
  console.log('Trying to load store :', key);
  return storage.load({ key });
};

export default storage;
