const React = require('react-native');
const { BlurView, VibrancyView } = require('react-native-blur');
const theme = require('./theme');
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

const styles = {
  container: {
    ...theme.fullscreen,
    flex: 1,
  },

  menuItem: {
    color: '#1bd982',
    fontSize: 20,
    lineHeight: 35,
    fontWeight: '300',
    letterSpacing: 2,
  },

  content: {
    paddingTop: 45,
    paddingLeft: 20,
  },

  accent: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  avatar: {
    width: 100,
    height: 100,
    marginLeft: 25,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#fff',
    overflow: 'hidden',
  },

  header: {
    fontSize: 22,
    lineHeight: 32,
    paddingLeft: 3,
    color: '#fff',
  },

  logo: {
    width: 40,
    height: 40,
    marginLeft: -5,
    tintColor: '#1bd982',
  },

  logoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
};

module.exports = React.createClass({
  render() {
    const speaker = { uri: 'https://reactive2015.com/assets/img/team/joshua_sierles.jpg', };
    const logoImage = { uri: 'https://cdn.auth0.com/blog/react-js/react.png', };

    return (
      <View style={{...styles.container, backgroundColor: '#212739', }}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image source={logoImage} style={styles.logo} />
            <Text style={styles.header}>
              Reactive<Text style={{ color: '#1bd982', }}>2015</Text>
            </Text>
          </View>
          <View style={{ paddingTop: 35, }}>
            <Text style={styles.menuItem}>WORKSHOP</Text>
            <Text style={styles.menuItem}>FIRST DAY</Text>
            <Text style={styles.menuItem}>SECOND DAY</Text>
            <Text style={styles.menuItem}>SPEAKERS</Text>
          </View>
        </View>
      </View>
    );
  },
});
