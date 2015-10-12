const React = require('react-native');
const ScrollableTabs = require('react-native-scrollable-tab-view');
const { connect } = require('react-redux/native');
const Schedule = require('../components/Schedule');
const TabBar = require('../components/TabBar');
const FilterScreen = require('./Filter');
const theme = require('../components/theme');
const { workshop, day1, day2 } = require('../data');
const {
  AsyncStorage,
  Component,
  ListView,
  View,
  Text,
  Image,
  TouchableOpacity,
} = React;

class ScheduleScreen extends Component {
  openFiltersScreen() {
    this.props.navigator.push({
      component: FilterScreen,
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <View style={theme.header}>
          <Text ref={'title'} style={theme.caption}>SCHEDULE</Text>
          <View style={theme.prevBtnContainer}></View>
          <TouchableOpacity
            onPress={this.openFiltersScreen.bind(this)}
            style={theme.nextBtnContainer}>
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
}

module.exports = ScheduleScreen;
