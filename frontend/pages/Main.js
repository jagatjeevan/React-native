import React, { Component } from 'react';

import {
  Text,
  Button,
  View
} from 'react-native';

import styles from '../../Styles/Style';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Welcome Screen',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.welcome}>
        <View style={styles.welcomeText}>
          <Text style={styles.header}>
            Welcome to React Native
          </Text>
        </View>
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('DetailsScreen')}
          title="Details Screen"
        />
      </View>
    );
  }
}
