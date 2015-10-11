const React = require('react-native');
const Avatar = require('./Avatar');
const ScheduleItem = require('./ScheduleItem');
const DetailsScreen = require('../screens/Details');
const theme = require('./theme');
const { connect } = require('react-redux/native');
const {
  Component,
  ListView,
  View,
} = React;

@connect(state => ({ state, }))
class Schedule extends Component {
  navigate(data) {
    const { navigator } = this.props;

    navigator.push({
      component: DetailsScreen,
      data,
    });
  }

  getDataSource() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => true,
    });
    const filters = this.props.state;

    return ds.cloneWithRows(
      this.props.data.filter((talk) => !talk.category || filters[talk.category])
    );
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <ListView
          dataSource={this.getDataSource()}
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
