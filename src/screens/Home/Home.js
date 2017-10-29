import React, {Component} from 'react';
import {inject} from 'mobx-react/native';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';

import styles from './styles';

class Home extends Component {
  static displayName = 'Home';

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default Home;
