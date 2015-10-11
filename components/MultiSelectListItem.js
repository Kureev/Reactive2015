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
    paddingTop: 7,
  },

  title: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 14,
  },

  checkmark: {
    width: 32,
    height: 32,
  },
};

module.exports = class MultiSelectListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }

  toggle() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const stateIcon = this.state.checked ?
      require('image!ios7-checkmark') :
      require('image!ios7-checkmark-outline');

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.row}
        onPress={this.toggle.bind(this)}>
        <Image
          source={stateIcon}
          style={[styles.checkmark, { tintColor: this.props.color, }, ]}/>
        <View style={styles.info}>
          <Text style={{ color: this.props.color, }}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};
