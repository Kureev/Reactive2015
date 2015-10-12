const React = require('react-native');
const ScheduleItem = require('../components/ScheduleItem');
const Profile = require('../components/Profile');
const theme = require('../components/theme');
const {
  Component,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  SegmentedControlIOS,
  InteractionManager,
  LinkingIOS,
} = React;

module.exports = class DetailsScreen extends Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      selected: 0,
      renderPlaceholderOnly: true,
    };
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

  switchTextContent(e) {
    this.setState({
      selected: e.nativeEvent.selectedSegmentIndex,
    });
  }

  render() {
    const { data } = this.props.route;

    if (this.state.renderPlaceholderOnly) {
      return (
        <View style={{ flex: 1, backgroundColor: theme.colors.white, }}>
          <View style={theme.header}></View>
        </View>
      );
    }

    const content = this.state.selected ?
      <Profile {...data} /> :
      <View>
        <Text style={theme.title}>Overview:</Text>
        <Text style={theme.textBlock}>{data.excerpt}</Text>
      </View>;

    return (
      <View style={{ flex: 1, backgroundColor: theme.colors.white, }}>
        <View style={theme.header}>
          <Text ref={'title'} style={theme.caption}>TALK DETAILS</Text>
          <TouchableOpacity
            style={[theme.prevBtnContainer, { left: 0, }, ]}
            onPress={() => this.props.navigator.pop()}>
            <Image
              source={require('image!ios7-arrow-back')}
              style={[theme.btn, { width: 36, height: 36, }, ]}/>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <ScheduleItem {...data} />
          <SegmentedControlIOS
            values={['Talk', 'Profile', ]}
            selectedIndex={this.state.selected}
            onChange={this.switchTextContent.bind(this)}
            style={theme.segmented}/>
          {content}
        </ScrollView>
      </View>
    );
  }
};
