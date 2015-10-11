const React = require('react-native');
const Avatar = require('./Avatar');
const theme = require('./theme');
const {
  Component,
  ListView,
  View,
  Text,
  Image,
  TouchableOpacity,
} = React;

const styles = {
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 20,
  },

  info: {
    paddingLeft: 20,
    flex: 1,
    justifyContent: 'flex-start',
  },

  title: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 14,
  },

  speaker: {
    color: theme.colors.lightText,
    fontWeight: '300',
    paddingTop: 5,
  },

  clock: {
    color: theme.colors.lightText,
    fontWeight: '300',
    fontSize: 12,
  },
};

module.exports = class ScheduleItem extends Component {
  render() {
    let speaker;

    if (this.props.speaker) {
      speaker = <Text style={styles.speaker}>{this.props.speaker}</Text>;
    }

    return (
      <TouchableOpacity style={styles.row} onPress={this.props.onPress}>
        <Avatar src={this.props.avatar} category={this.props.category} />
        <View style={styles.info}>
          <Text style={styles.title}>{this.props.title}</Text>
          {speaker}
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, }}>
            <Image
              source={require('image!clock104')}
              style={{ width: 14, height: 14, marginRight: 5, }}/>
            <Text style={styles.clock}>{this.props.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};
