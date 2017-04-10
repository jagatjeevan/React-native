import React, { Component } from 'react';
import ContactsWrapper from 'react-native-contacts-wrapper';

import {
  Text,
  Button,
  ScrollView,
  View
} from 'react-native';

import styles from '../Styles/Style';

export default class ReadContact extends Component {
  static navigationOptions = {
    title: 'Contacts',
  };

  constructor() {
    super();
    this.state = {
      contacts: ''
    };
    this.fetchContacts = this.fetchContacts.bind(this);
    this.getContactScreen = this.getContactScreen.bind(this);
  }

  fetchContacts() {
    ContactsWrapper.getContact()
      .then((contact) => {
        this.importingContactInfo = false;
        console.log(contact);
        this.setState({
          contacts: contact
        });
      });
  }

  getContactScreen(navigate) {
    if(this.state.contacts === '') {
      return (
        <View style={styles.openContactSection}>
          <Button
            style={[styles.buttonStyle, styles.footerButton]}
            onPress={this.fetchContacts}
            title="Open Contacts"
          />
        </View>
      );
    }
    return (
      <View style={styles.welcome}>
      <ScrollView>
        <Text style={styles.header}>Contacts</Text>
        <View style={styles.nameCard}>
          <View style={styles.nameCardElement}>
            <Text style={styles.label}>Name: </Text>
            <Text style={styles.value}>{this.state.contacts.name}</Text>
          </View>
          <View style={styles.nameCardElement}>
            <Text style={styles.label}>Phone: </Text>
            <Text style={styles.value}>{this.state.contacts.phone}</Text>
          </View>
          <View style={styles.nameCardElement}>
            <Text style={styles.label}>Email: </Text>
            <Text style={styles.value}>{this.state.contacts.email}</Text>
          </View>
        </View>
      </ScrollView>
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('DetailsScreen')}
          title="Details Screen"
        />
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.app}>
        { this.getContactScreen(navigate) }
      </View>
    );
  }
}
