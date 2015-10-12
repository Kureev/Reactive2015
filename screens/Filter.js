const React = require('react-native');
const ScheduleItem = require('../components/ScheduleItem');
const MultiSelectList = require('../components/MultiSelectList');
const theme = require('../components/theme');
const { connect } = require('react-redux/native');
const {
  AsyncStorage,
  Component,
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity,
  InteractionManager,
} = React;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  text: {
    padding: 20,
    flex: 1,
    color: theme.colors.lightText,
  },
};

@connect(state => ({ state, }))
class FilterScreen extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      renderPlaceholderOnly: true,
    };
  }

  updateFilter(changed) {
    this.props.dispatch({
      type: 'UPDATE_FILTER',
      data: {
        category: changed.category,
        checked: changed.checked,
      },
    });
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      requestAnimationFrame(() =>
        this.setState({
          renderPlaceholderOnly: false,
        })
      );
    });
  }

  render() {
    const { state } = this.props;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const filters = ds.cloneWithRows([
      {
        title: 'Data Flow',
        category: 'data_flow',
        color: theme.colors.blue,
        checked: state.data_flow,
      }, {
        title: 'Rethinking React',
        category: 'rethinking_react',
        color: theme.colors.purple,
        checked: state.rethinking_react,
      }, {
        title: 'React Everywhere',
        category: 'react_everywhere',
        color: theme.colors.green,
        checked: state.react_everywhere,
      }, {
        title: 'React General',
        category: 'react_general',
        color: theme.colors.yellow,
        checked: state.react_general,
      },
    ]);

    if (this.state.renderPlaceholderOnly) {
      return (
        <View style={{ flex: 1, backgroundColor: theme.colors.white, }}>
          <View style={theme.header}></View>
        </View>
      );
    }

    return (
      <View style={{ flex: 1, backgroundColor: theme.colors.white, }}>
        <View style={theme.header}>
          <Text ref={'title'} style={theme.caption}>FILTER SETTINGS</Text>
          <TouchableOpacity
            style={[theme.prevBtnContainer, { left: 0, }, ]}
            onPress={() => this.props.navigator.pop()}>
            <Image
              source={require('image!ios7-arrow-back')}
              style={[theme.btn, { width: 36, height: 36, }, ]}/>
          </TouchableOpacity>
        </View>
        <MultiSelectList data={filters} onChange={this.updateFilter.bind(this)}/>
      </View>
    );
  }
}

module.exports = FilterScreen;
