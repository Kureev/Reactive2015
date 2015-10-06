const theme = require('./components/theme');
const Menu = require('./components/Menu');
const SideMenu = require('react-native-side-menu');
const React = require('react-native');
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBarIOS,
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const Reactive2015 = React.createClass({
  render() {
    StatusBarIOS.setStyle('light-content');
    const menu = <Menu />;

    return (
      <SideMenu menu={menu}>
        <View style={styles.container}>
          <Text>Hello, yopta</Text>
        </View>
      </SideMenu>
    );
  },
});

AppRegistry.registerComponent('Reactive2015', () => Reactive2015);
