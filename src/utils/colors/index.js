const {color} = require('react-native-reanimated');

const mainColor = {
  green1: '#0bcad4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7d8797',
  grey2: '#e9e9e9',
  grey3: '#EDEEF0',
  grey4: '#b1b7c2',
  blue: '#0066CB',
  black1: '#000000',
  black2: 'rgba(0,0,0,0.5)',
  red1: '#e06379',
};

export const colors = {
  primary: mainColor.green1,
  secondary: mainColor.dark1,
  tertiary: mainColor.blue,
  disable: mainColor.grey3,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColor.dark1,
    secondary: mainColor.grey1,
    menuActive: mainColor.green1,
    menuInactive: mainColor.dark2,
    dark3: mainColor.dark3,
  },
  button: {
    primary: {
      background: mainColor.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColor.dark1,
    },
    disable: {
      background: mainColor.grey3,
      text: mainColor.grey4,
    },
  },
  border: mainColor.grey2,
  cardLight: mainColor.green2,
  loadingBackground: mainColor.black2,
  errorMessage: mainColor.red1,
};
