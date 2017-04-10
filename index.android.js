/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {
  AppRegistry,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import MainScreen from './frontend/pages/Main';
import ScrollViewSection from './frontend/ScrollViewSection';
import DetailsScreen from './frontend/DetailsScreen';
import Contacts from './frontend/ReadContact';

const AwesomeProject = StackNavigator({
  Main: {screen: MainScreen},
  Contacts: {screen: Contacts},
  DetailsScreen: {screen: DetailsScreen},
  ScrollViewSection: {screen: ScrollViewSection},
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
