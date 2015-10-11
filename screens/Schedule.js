const React = require('react-native');
const ScrollableTabs = require('react-native-scrollable-tab-view');
const Schedule = require('../components/Schedule');
const TabBar = require('../components/TabBar');
const FilterScreen = require('./Filter');
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
};

module.exports = class ScheduleScreen extends Component {
  openFilter() {
    this.props.navigator.push({
      component: FilterScreen,
    });
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <View style={styles.header}>
          <Text ref={'title'} style={styles.caption}>SCHEDULE</Text>
          <TouchableOpacity onPress={() => {}} style={theme.prevBtnContainer}>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.openFilter.bind(this)}
            style={[theme.nextBtnContainer, { top: 32, }, ]}>
            <Image source={require('image!ios7-settings-strong')} style={theme.btn}/>
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
