const theme = require('./theme');
const React = require('react-native');
const {
  Component,
  ListView,
  View,
  Text,
  Image,
  TouchableOpacity,
  LinkingIOS,
} = React;

module.exports = class Profile extends Component {
  render() {
    const github = this.props.github ?
      <TouchableOpacity onPress={() => LinkingIOS.openURL(this.props.github)}>
        <Image source={require('image!social-github')} style={theme.social} />
      </TouchableOpacity> : null;

    const twitter = this.props.twitter ?
      <TouchableOpacity onPress={() => LinkingIOS.openURL(this.props.twitter)}>
        <Image source={require('image!social-twitter')} style={theme.social} />
      </TouchableOpacity> : null;

    const company = this.props.company ?
      <View>
        <Text style={theme.title}>Company:</Text>
        <Text style={theme.textBlock}>
          {this.props.company}
        </Text>
      </View> : null;

    return (
      <View>
        {company}
        <Text style={theme.title}>About {this.props.speaker.split(' ')[0]}:</Text>
        <Text style={theme.textBlock}>{this.props.bio}</Text>
        <View style={theme.socialContainer}>
          {github}
          <View style={{ marginLeft: 5, marginRight: 5, }}></View>
          {twitter}
        </View>
      </View>
    );
  }
};
