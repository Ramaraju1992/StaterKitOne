/**
 * App Theme - Colors
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

const app = {
  background: '#EDEDED',
};
const brand = {
  brand: {
    primary: '#23153C',
    secondary: '#FFFFFF',
  },
};
const borders = {
  border: '#D0D1D5',
};
const tabbar = {
  tabbar: {
    background: '#ffffff',
    iconDefault: '#BABDC2',
    iconSelected: brand.brand.primary,
  },
};

export default {
  ...app,
  ...brand,
  ...borders,
  ...tabbar,
};
