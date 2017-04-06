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

const AwesomeProject = StackNavigator({
  Main: {screen: MainScreen},
  ScrollViewSection: {screen: ScrollViewSection}
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
