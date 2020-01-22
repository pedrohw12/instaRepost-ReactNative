import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import RepostScreen from '../screens/RepostScreen';
import InitialScreen from '../screens/initialScreen';

const MainStack = createStackNavigator({
  InitialScreen,
  RepostScreen,
}, {
  defaultNavigationOptions: {
    headerShown: false
  },
});

export default createAppContainer(MainStack);