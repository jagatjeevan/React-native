import { StyleSheet } from 'react-native';

const config = {
  appPadding: 20,
  appFontSize: 20,
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
  },
  alignCenter: {
    alignSelf: 'center',
  },
  segmentedControls: {
    padding: config.appPadding,
  },
  welcome: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeText: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    padding: config.appPadding,
  },
  paragraph: {
    fontSize: config.appFontSize,
    padding: config.appPadding,
  },
  input: {
    fontSize: config.appFontSize,
    marginBottom: 10,
    padding: config.appPadding,
  },
  inputPrimary: {
    backgroundColor: '#efefef',
    padding: config.appPadding,
  },
  buttonStyle: {
    fontSize: 20,
  },
  footerButton: {
    alignSelf: 'flex-end',
  },
  nameListElement: {
    fontSize: config.appFontSize,
    paddingBottom: config.appPadding,
    paddingLeft: config.appPadding,
  },
  openContactSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  nameCard: {
    backgroundColor: '#efefef',
    padding: config.appPadding,
    margin: config.appPadding,
    marginTop: 0,
  },
  nameCardElement: {
    flex: 1,
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
  }
});

export default styles;
