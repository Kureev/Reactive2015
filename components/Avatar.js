const theme = require('./theme');
const React = require('react-native');
const {
  Component,
  ListView,
  View,
  Text,
  Image,
  TouchableOpacity,
} = React;

const styles = {
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

module.exports = class Avatar extends Component {
  render() {
    let avatar = <Image
      source={{ uri: 'https://cdn.auth0.com/blog/react-js/react.png', }}
      style={styles.avatarMock}/>;

    if (this.props.src) {
      avatar = <Image
        source={{ uri: this.props.src, }}
        style={[styles.avatar, { borderColor: getBorderColor(this.props.category), }, ]}/>;
    }

    return avatar;
  }
};
