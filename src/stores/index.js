// import {create} from 'mobx-persist';
// import {AsyncStorage} from 'react-native';

// ## Generated Stores Imports
import AuthStore from './Auth';

import Todos from './todos';

// const hydrate = create({storage: AsyncStorage});

const stores = {
  // ## Generated Stores Includes
  AuthStore,

  Todos
};

// you can hydrate stores here with mobx-persist
// hydrate('Todos', stores.Todos);

export default stores;
