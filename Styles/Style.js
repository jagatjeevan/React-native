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
  header: {
    backgroundColor: '#efefef',
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
  namesList: {
  },
  buttonStyle: {
    fontSize: 20,
    padding: config.appPadding,
  },
  nameListElement: {
    fontSize: config.appFontSize,
    paddingBottom: config.appPadding,
    paddingLeft: config.appPadding,
  }
});

export default styles;
