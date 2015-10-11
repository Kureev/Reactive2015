const theme = require('./components/theme');
const { createStore, applyMiddleware, bindActionCreators } = require('redux');
const { Provider } = require('react-redux/native');
const ScheduleScreen = require('./screens/Schedule');
const filterReducer = require('./reducers/filter');
const React = require('react-native');
const {
  AppRegistry,
  StatusBarIOS,
  Component,
  Navigator,
} = React;

const store = createStore(filterReducer);

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
      <Provider store={store}>
        {() => (
          <Navigator
            renderScene={this.renderScene}
            initialRoute={{ component: ScheduleScreen, }}/>
        )}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Reactive2015', () => Reactive2015);
