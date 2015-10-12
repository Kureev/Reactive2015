const React = require('react-native');
const Avatar = require('./Avatar');
const ScheduleItem = require('./ScheduleItem');
const DetailsScreen = require('../screens/Details');
const theme = require('./theme');
const debounce = require('debounce');
const { connect } = require('react-redux/native');
const {
  Component,
  ListView,
  View,
  InteractionManager,
} = React;

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => true,
});

function makeDataSource(data, filters) {
  return ds.cloneWithRows(
    data.filter((talk) => !talk.category || filters[talk.category])
  );
}

@connect(state => ({ state, }))
class Schedule extends Component {
  constructor(props, ctx) {
    super(props, ctx);
    this.forceUpdate = debounce(this.forceUpdate.bind(this), 1000);
    this.state = {
      ds: makeDataSource(props.data, props.state),
    };
  }

  navigate(data) {
    const { navigator } = this.props;

    navigator.push({
      component: DetailsScreen,
      data,
    });
  }

  componentWillReceiveProps(props) {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ ds: makeDataSource(props.data, props.state), });
      InteractionManager.runAfterInteractions(this.forceUpdate);
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <ListView
          dataSource={this.state.ds}
          renderRow={(rowData) =>
            <ScheduleItem
              {...rowData}
              onPress={() => this.navigate(rowData)} />
          } />
      </View>
    );
  }
}

module.exports = Schedule;
