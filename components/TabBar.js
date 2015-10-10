const React = require('react-native');
const theme = require('./theme');

const {
  Text,
  View,
  TouchableOpacity,
  Component,
  Animated,
} = React;

const precomputeStyle = require('precomputeStyle');
const deviceWidth = require('Dimensions').get('window').width;
const TAB_UNDERLINE_REF = 'TAB_UNDERLINE';

const styles = {
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },

  tabs: {
    height: 50,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#ccc',
    backgroundColor: theme.colors.primary,
  },

  tabUnderlineStyle: {
    position: 'absolute',
    height: 4,
    backgroundColor: theme.colors.accent,
    bottom: 0,
  },
};

module.exports = class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Animated.Value(0),
    };
  }

  renderTabOption(name, page) {
    const isTabActive = this.props.activeTab === page;

    return (
      <TouchableOpacity
        key={name}
        onPress={() => this.props.goToPage(page)}
        style={styles.tab}>
          <Text style={{
            color: isTabActive ? theme.colors.accent : theme.colors.white,
            fontWeight: isTabActive ? 'bold' : 'normal', }}>
            {name}
          </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const width = deviceWidth / this.props.tabs.length;
    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0, width, ],
    });

    return (
      <View style={{ position: 'relative', }}>
        <View style={styles.tabs}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
        <Animated.View
          style={[styles.tabUnderlineStyle, { width, left, }, ]}
          ref={TAB_UNDERLINE_REF} />
      </View>
    );
  }
};
