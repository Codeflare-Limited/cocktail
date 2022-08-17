import React, { PureComponent } from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { secondaryColor } from '../assets/styles/Style';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import FIcon from 'react-native-vector-icons/Foundation';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo'
import HomeScreen from '../screens/HomeScreen';
IconEntypo.loadFont();
SIcon.loadFont();
FIcon.loadFont();
IonIcon.loadFont();
AntIcon.loadFont();

class BottomNav extends PureComponent {
  render(){
    return <BottomTab />
  }
}

const TabNavigator = createMaterialBottomTabNavigator({
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: ({routes, index, focused}) => <HomeScreen />,
                tabBarIcon: ({tintColor, focused}) =>
                  focused ? (
                    <IconEntypo
                      name={'home'}
                      size={24}
                      color={'#fff'}
                      style={{padding: 0}}
                    />
                  ) : (
                    <SIcon name={'home'} size={22} color={'#fff'} />
                  ),
              },
        },
        Saved: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: ({routes, index, focused}) => <Saved />,
                tabBarIcon: ({tintColor, focused}) =>
                    <IonIcon
                      name={ focused ? 'heart' : 'heart-outline'}
                      size={24}
                      color={'#fff'}
                      style={{padding: 0}}
                    />

              },
        },
        Menu: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: ({routes, index, focused}) => <Menu />,
                tabBarIcon: ({tintColor, focused}) =>
                    <IonIcon
                      name={ focused ? 'menu' : 'menu-outline'}
                      size={24}
                      color={'#fff'}
                      style={{padding: 0}}
                    />
              },
        }
},{
    initialRouteName: 'HomeScreen',
    animationEnabled: false,
    activeColor: 'white',
    inactiveColor: 'black',
    shifting: false,
    tabBarColor: '#fff',
    barStyle: {
    backgroundColor: secondaryColor,
    borderTopColor: '#C0C0C0',
    height: 54,
    paddingTop: 6,
    marginBottom: 3,
    }
});

const AuthStack = createStackNavigator({

    Home: {
        screen: TabNavigator,
        navigationOptions: {
          headerShown: false,
        },
      },

},{
    initialRouteName: 'Home',
})

const BottomTab = createAppContainer(AuthStack);
export default BottomNav
