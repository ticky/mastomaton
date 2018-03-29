import { StackNavigator } from 'react-navigation';
import Timeline from '../components/Timeline';
import Details from '../components/Details';

export default StackNavigator(
  {
    Timeline,
    Details
  },
  {
    initialRouteName: 'Timeline'
  }
);
