const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const colors = {
  primary: '#283046',
  secondary: '#212739',
  accent: '#1bd982',
  text: '#111',
  lightText: '#333',
  white: '#fff',

  blue: '#3498db',
  purple: '#9b59b6',
  green: '#2ecc71',
  yellow: '#f1c40f',
};

module.exports = {
  colors,

  fullscreen: {
    width: window.width,
    height: window.height,
  },

  header: {
    backgroundColor: '#283046',
  },
};
