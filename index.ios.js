const theme = require('./components/theme');
const Menu = require('./components/Menu');
const SideMenu = require('react-native-side-menu');
const ScheduleScreen = require('./screens/Schedule');
const React = require('react-native');
const {
  AppRegistry,
  StatusBarIOS,
  Component,
  Navigator,
} = React;

class Reactive2015 extends Component {
  componentDidMount() {
    StatusBarIOS.setStyle('light-content');
  }

  renderScene(route, navigator) {
    const RouteComponent = route.component;

    return (
      <RouteComponent
        style={{ flex: 1, }}
        navigator={navigator}
        route={route} />
    );
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        initialRoute={{
          component: ScheduleScreen,
      }}/>
    );
  }
}

AppRegistry.registerComponent('Reactive2015', () => Reactive2015);
