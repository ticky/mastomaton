import { StackNavigator } from 'react-navigation';
import Welcome from '../components/Welcome';
import Login from '../components/Login';
// const Signup = () => {};

export default StackNavigator(
  {
    Welcome,
    Login,
    // Signup
  },
  {
    initialRouteName: 'Welcome'
  }
);
