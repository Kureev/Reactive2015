const React = require('react-native');
const Avatar = require('./Avatar');
const ScheduleItem = require('./ScheduleItem');
const DetailsScreen = require('../screens/Details');
const theme = require('./theme');
const {
  Component,
  ListView,
  View,
} = React;

module.exports = class Schedule extends Component {
  navigate(data) {
    const { navigator } = this.props;

    navigator.push({
      component: DetailsScreen,
      data,
    });
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <ListView
          dataSource={this.props.data}
          renderRow={(rowData) =>
            <ScheduleItem
              {...rowData}
              onPress={() => this.navigate(rowData)} />
          } />
      </View>
    );
  }
};
