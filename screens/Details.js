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
} = React;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    ...theme.header,
    height: 70,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  caption: {
    color: theme.colors.accent,
    flex: 1,
    fontSize: 14,
    paddingTop: 35,
    textAlign: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    position: 'absolute',
  },

  text: {
    padding: 20,
    flex: 1,
    color: theme.colors.lightText,
  },

  backBtn: {
    height: 16,
    width: 16,
    justifyContent: 'center',
    top: 36,
    marginLeft: 10,
  },
};

class DetailsScreen extends Component {
  render() {

    const { data } = this.props.route;

    return (
      <View style={{ flex: 1, backgroundColor: theme.colors.white, }}>
        <View style={styles.header}>
          <Text ref={'title'} style={styles.caption}>TALK DETAILS</Text>
          <TouchableOpacity style={{ width: 40, }} onPress={() => this.props.navigator.pop()}>
            <Image source={require('image!direction196')} style={styles.backBtn}/>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <ScheduleItem {...data} />
          <Text style={styles.text}>{data.excerpt}</Text>
        </ScrollView>
      </View>
    );
  }
}

module.exports = DetailsScreen;
