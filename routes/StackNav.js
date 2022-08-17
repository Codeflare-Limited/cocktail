import React, { PureComponent } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import BottomNav from './BottomNav';
import Landing from '../screens/Landing';

class StackNav extends PureComponent {
  render(){
  return <AppContainer />
}
}

const AppStackNavigator = createStackNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: {
      gesturesEnabled: false,
      headerShown: false,
    },
  },
  BottomNav: {
      screen: BottomNav,
      navigationOptions: {
      headerShown: false,
       headerTitle: '',
       headerTintColor: '#fff',
       headerStyle: {
       backgroundColor: '#FFF',
           },
        },
  },
},
{
  initialRouteName: 'Landing'
}
);

const AppContainer = createAppContainer(AppStackNavigator);

export default StackNav;
