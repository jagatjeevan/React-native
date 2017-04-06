import React, { Component } from 'react';

import {
  Alert,
  AppRegistry,
  Button,
  ListView,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';

import styles from '../Styles/Style';

export default class ScrollViewSection extends Component {
  static navigationOptions = {
    title: 'ScrollView Screen',
  };
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      text1: '',
      text2: '',
      dataSource: ds.cloneWithRows(['Jeevan', 'Jagat', 'Kanha', 'Tutu'])
    };
    this._onButtonPress = this._onButtonPress.bind(this);
  }

  _onButtonPress() {
    Alert.alert(`Hello ${this.state.text2}. How are you ?`);
  }

  render() {
    return (
      <ScrollView>
        <ListView 
          style={styles.namesList}
          dataSource = {this.state.dataSource}
          renderRow = {(rowData) => <Text style={styles.nameListElement}>{rowData}</Text>}
        />
        <TextInput
          placeholder="Type here..."
          style={styles.input}
          onChangeText={(text1) => this.setState({text1})}
        />
        <TextInput
          placeholder="Type name here..."
          style={[styles.input, styles.inputPrimary]}
          onChangeText={(text2) => this.setState({text2})}
        />
        <Button 
          onPress={this._onButtonPress}
          title="Press Me"
          accessibilityLabel="See an informative alert"
        />
        <Text style={styles.paragraph}>
          {this.state.text1}
        </Text>
      </ScrollView>
    );
  }
}
