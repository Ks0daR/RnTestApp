import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from '../screens/MainScreen';
import ImageScreen from '../screens/ImageScreen';

const ImageNavigator = createStackNavigator({
  Main: MainScreen,
  Image: ImageScreen,
});

export const AppNavigaton = createAppContainer(ImageNavigator);
