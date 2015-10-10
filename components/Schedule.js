const React = require('react-native');
const theme = require('./theme');
const {
  Component,
  ListView,
  View,
  Text,
  Image,
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

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
  },

  avatarMock: {
    width: 64,
    height: 64,
    borderRadius: 32,
    tintColor: theme.colors.accent,
  },
};

function getBorderColor(category) {
  let color = theme.colors.primary;

  switch (category) {
    case 'data_flow':
      color = theme.colors.blue;
      break;
    case 'rethinking_react':
      color = theme.colors.purple;
      break;
    case 'react_everywhere':
      color = theme.colors.green;
      break;
    case 'react_general':
      color = theme.colors.yellow;
      break;
    default:
      break;
  }

  return color;
}

module.exports = class Schedule extends Component {
  renderRow(rowData, sectionID, rowID) {
    let avatar;
    let speaker;

    if (rowData.avatar) {
      avatar = <Image
        source={{ uri: rowData.avatar, }}
        style={[styles.avatar, { borderColor: getBorderColor(rowData.category), }, ]}/>;
    } else {
      avatar = <Image
        source={{ uri: 'https://cdn.auth0.com/blog/react-js/react.png', }}
        style={styles.avatarMock}/>;
    }

    if (rowData.speaker) {
      speaker = <Text style={styles.speaker}>{rowData.speaker}</Text>;
    }

    return (
      <View style={styles.row}>
        {avatar}
        <View style={styles.info}>
          <Text style={styles.title}>{rowData.title}</Text>
          {speaker}
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, }}>
            <Image
              source={require('image!clock104')}
              style={{ width: 14, height: 14, marginRight: 5, }}/>
            <Text style={styles.clock}>{rowData.time}</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <ListView
          dataSource={this.props.data}
          renderRow={this.renderRow} />
      </View>
    );
  }
};
