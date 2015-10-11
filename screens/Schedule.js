const React = require('react-native');
const ScrollableTabs = require('react-native-scrollable-tab-view');
const Schedule = require('../components/Schedule');
const TabBar = require('../components/TabBar');
const theme = require('../components/theme');
const { day1, day2, workshop } = require('../data');
const {
  Component,
  ListView,
  View,
  Text,
  Image,
  TouchableOpacity,
} = React;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    ...theme.header,
    height: 70,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  caption: {
    color: theme.colors.accent,
    flex: 1,
    fontSize: 14,
    paddingTop: 35,
    textAlign: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    position: 'absolute',
  },

  logo: {
    width: 20,
    height: 20,
    tintColor: theme.colors.accent,
  },

  prevBtnContainer: {
    height: 16,
    width: 16,
    justifyContent: 'center',
    top: 36,
    left: 10,
  },

  nextBtnContainer: {
    height: 16,
    width: 16,
    justifyContent: 'center',
    top: 36,
    right: 10,
  },

  btn: {
    height: 16,
    width: 16,
    justifyContent: 'center',
  },
};

module.exports = class ScheduleScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <View style={styles.header}>
          <Text ref={'title'} style={styles.caption}>SCHEDULE</Text>
          <TouchableOpacity onPress={() => {}} style={styles.prevBtnContainer}>
            <Image source={require('image!menu48')} style={styles.btn}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.nextBtnContainer}>
            <Image source={require('image!gear39')} style={styles.btn}/>
          </TouchableOpacity>
        </View>
        <ScrollableTabs edgeHitWidth={100} renderTabBar={() => <TabBar />}>
          <Schedule {...this.props} data={workshop} tabLabel="WORKSHOP" />
          <Schedule {...this.props} data={day1} tabLabel="DAY 1" />
          <Schedule {...this.props} data={day2} tabLabel="DAY 2" />
        </ScrollableTabs>
      </View>
    );
  }
};
