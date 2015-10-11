const React = require('react-native');
const MultiSelectListItem = require('./MultiSelectListItem');
const theme = require('./theme');
const {
  Component,
  ListView,
  View,
} = React;

module.exports = class Schedule extends Component {
  toggle(data) {
    console.log(data);
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <ListView
          dataSource={this.props.data}
          renderRow={(rowData) =>
            <MultiSelectListItem
              {...rowData}
              onPress={() => this.toggle(rowData)} />
          } />
      </View>
    );
  }
};
