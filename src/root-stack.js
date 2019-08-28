import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import One from './screens/one';
import Two from './screens/two';
import Three from './screens/three';
import Four from './screens/four';

const RootStackContainer = createStackNavigator(
  {
    One: {
      screen: One,
      path: '/one',
    },
    Two: {
      screen: Two,
      path: '/two',
    },
    Three: {
      screen: Three,
      path: '/three',
    },
    Four: {
      screen: Four,
      path: '/four',
    },
  },
  {
    initialRouteName: 'One',
    swipeEnabled: true,
    lazy: false,
  },
);

export default createAppContainer(RootStackContainer);
