const React = require('react-native');
const MultiSelectListItem = require('./MultiSelectListItem');
const theme = require('./theme');
const {
  Component,
  ListView,
  View,
} = React;

module.exports = class Schedule extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <ListView
          dataSource={this.props.data}
          renderRow={(rowData, sectionID, rowID) =>
            <MultiSelectListItem
              {...rowData}
              index={rowID}
              onPress={this.props.onChange} />
          } />
      </View>
    );
  }
};
