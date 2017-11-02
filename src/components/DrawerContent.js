import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { View, Text } from 'react-native';

export default inject('NavigationStore')(observer(() => (
  <View><Text>SALUT</Text></View>
)));
