import React, { Component } from 'react';
import { SegmentedControls } from 'react-native-radio-buttons';
import {
  Text,
  Button,
  View
} from 'react-native';

import styles from '../../Styles/Style';

const options = [
  {
    label: 'Blue',
    value: 'blue'
  },
  {
    label: 'Yellow',
    value: 'yellow'
  },
  {
    label: 'Black',
    value: 'black'
  },
  {
    label: 'Maroon',
    value: 'maroon'
  },
  {
    label: 'Cyan',
    value: 'cyan'
  }
];

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: options[2]
    };
    this.setSelectedOption = this.setSelectedOption.bind(this);
  }

  static navigationOptions = {
    title: 'Welcome Screen',
  };

  setSelectedOption(e) {
    this.setState({
      selectedOption: e
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.welcome}>
        <View style={styles.welcomeText}>
          <Text style={styles.header}>
            Welcome to React Native
          </Text>
          <Text style={styles.alignCenter}>
            Which color do you like ? {this.state.selectedOption.label}
          </Text>
          <View style={styles.segmentedControls}>
            <SegmentedControls
              options={ options }
              onSelection={ this.setSelectedOption }
              selectedOption={ this.state.selectedOption }
              extractText={ (option) => option.label }
            />
          </View>
        </View>
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('Contacts')}
          title="Contacts Screen"
        />
      </View>
    );
  }
}
