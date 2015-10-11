const React = require('react-native');
const ScheduleItem = require('../components/ScheduleItem');
const MultiSelectList = require('../components/MultiSelectList');
const theme = require('../components/theme');
const {
  Component,
  View,
  Text,
  Image,
  ListView,
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

  text: {
    padding: 20,
    flex: 1,
    color: theme.colors.lightText,
  },
};

module.exports = class FilterScreen extends Component {
  render() {
    const { data } = this.props.route;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const filters = ds.cloneWithRows([
      {
        title: 'Data Flow',
        color: theme.colors.blue,
      }, {
        title: 'Rethinking React',
        color: theme.colors.purple,
      }, {
        title: 'React Everywhere',
        color: theme.colors.green,
      }, {
        title: 'React General',
        color: theme.colors.yellow,
      },
    ]);

    return (
      <View style={{ flex: 1, backgroundColor: theme.colors.white, }}>
        <View style={styles.header}>
          <Text ref={'title'} style={styles.caption}>FILTER SETTINGS</Text>
          <TouchableOpacity
            style={theme.prevBtnContainer}
            onPress={() => this.props.navigator.pop()}>
            <Image source={require('image!ios7-arrow-back')} style={theme.btn}/>
          </TouchableOpacity>
        </View>
        <MultiSelectList data={filters}/>
      </View>
    );
  }
};
