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
    backgroundColor: '#fff',
  },

  header: {
    ...theme.header,
    height: 50,
  },

  caption: {
    color: '#fff',
    flex: 1,
    paddingTop: 25,
    textAlign: 'center',
  },
});

const Reactive2015 = React.createClass({
  render() {
    StatusBarIOS.setStyle('light-content');
    const menu = <Menu />;

    return (
      <SideMenu menu={menu}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.caption}>FIRST DAY</Text>
          </View>
        </View>
      </SideMenu>
    );
  },
});

AppRegistry.registerComponent('Reactive2015', () => Reactive2015);
