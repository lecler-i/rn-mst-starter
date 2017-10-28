import React, {Component} from 'react';

import {
  View,
  ActivityIndicator
} from 'react-native';

import styles from './styles';

class Splash extends Component {


  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large'/>
      </View>
    );
  }
}

export default Splash;
