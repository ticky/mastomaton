import { SwitchNavigator, StackNavigator } from 'react-navigation';
import AppLoadingScreen from './components/AppLoadingScreen';
import UnauthenticatedNavigator from './navigators/Unauthenticated';
import AuthenticatedNavigator from './navigators/Authenticated';

export default SwitchNavigator(
  {
    Loading: AppLoadingScreen,
    Unauthenticated: UnauthenticatedNavigator,
    Authenticated: AuthenticatedNavigator
  },
  {
    initialRouteName: 'Loading'
  }
);
