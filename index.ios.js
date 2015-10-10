const theme = require('./components/theme');
const Menu = require('./components/Menu');
const TabBar = require('./components/TabBar');
const SideMenu = require('react-native-side-menu');
const ScrollableTabs = require('react-native-scrollable-tab-view');
const Schedule = require('./components/Schedule');
const React = require('react-native');
const { day1, day2, workshop } = require('./data');
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
    height: 65,
  },

  caption: {
    color: '#fff',
    flex: 1,
    paddingTop: 35,
    textAlign: 'center',
  },
});

const Reactive2015 = React.createClass({
  render() {
    StatusBarIOS.setStyle('default');

    return (
      <View style={{ flex: 1, }}>
        <View style={styles.header}></View>
        <ScrollableTabs edgeHitWidth={100} renderTabBar={() => <TabBar />}>
          <Schedule data={workshop} tabLabel="Workshop" />
          <Schedule data={day1} tabLabel="Day 1" />
          <Schedule data={day2} tabLabel="Day 2" />
        </ScrollableTabs>
      </View>
    );
  },
});

AppRegistry.registerComponent('Reactive2015', () => Reactive2015);
