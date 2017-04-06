import React, { Component } from 'react';
import DeviceInfo from 'react-native-device-info';
import Contacts from 'react-native-contacts';
import {
  AppRegistry,
  Text,
  Button,
  ScrollView,
  View
} from 'react-native';

import styles from '../../Styles/Style';

function getContacts() {
  let contactsArr = [];
  Contacts.getAll( (err, contacts) => {
    contactsArr.push(contacts.phoneNumbers)
  });
  console.log('contacts array', contactsArr);
  return contactsArr;
}

export default class Main extends Component {
  static navigationOptions = {
    title: 'Main Screen',
  };
  constructor() {
    super();
    this.state = {
      uniqueId: DeviceInfo.getUniqueID(),
      manufacturer: DeviceInfo.getManufacturer(),
      brand: DeviceInfo.getBrand(),
      deviceName: DeviceInfo.getDeviceName(),
      systemName: DeviceInfo.getSystemName(),
      userAgent: DeviceInfo.getUserAgent(),
      contactsAre: getContacts()
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.app}>
        <Text style={styles.header}>
          Welcome to React Native!
        </Text>
        <ScrollView>
          <Text>Contacts</Text>
          <Text style={styles.nameListElement}>Manufacturer : {this.state.manufacturer}</Text>
          <Text style={styles.nameListElement}>Unique ID : {this.state.uniqueId}</Text>
          <Text style={styles.nameListElement}>Brand : {this.state.brand}</Text>
          <Text style={styles.nameListElement}>Device Name : {this.state.deviceName}</Text>
          <Text style={styles.nameListElement}>System Name : {this.state.systemName}</Text>
          <Text style={styles.nameListElement}>User Agent : {this.state.userAgent}</Text>
        </ScrollView>
        <Button 
          style={styles.buttonStyle}
          onPress={() => navigate('ScrollViewSection')}
          title="ScrollViewSection"
        />
      </View>
    );
  }
}
