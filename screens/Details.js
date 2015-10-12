const React = require('react-native');
const ScheduleItem = require('../components/ScheduleItem');
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

    let content = <Text style={styles.text}>{data.excerpt}</Text>;

    if (this.state.selected) {
      const github = data.github ?
        <TouchableOpacity onPress={() => LinkingIOS.openURL(data.github)}>
          <Image source={require('image!social-github')} style={theme.social} />
        </TouchableOpacity> : null;

      const twitter = data.twitter ?
        <TouchableOpacity onPress={() => LinkingIOS.openURL(data.twitter)}>
          <Image source={require('image!social-twitter')} style={theme.social} />
        </TouchableOpacity> : null;

      content = (
        <View>
          <Text style={styles.text}>{data.bio}</Text>
          <View style={{ flexDirection: 'row', alignSelf: 'center', paddingBottom: 20, }}>
            {github}
            {twitter}
          </View>
        </View>
      );
    }

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
            values={['Talk', 'Bio', ]}
            selectedIndex={this.state.selected}
            onChange={this.switchTextContent.bind(this)}
            style={theme.segmented}/>
          {content}
        </ScrollView>
      </View>
    );
  }
};
