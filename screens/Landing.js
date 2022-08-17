import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { styles } from '../assets/styles/Style';
import { Button } from 'react-native-elements';
import wine from '../assets/images/wine.png';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

class Landing extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={wine} resizeMode="cover" style={styles.container}>
      <View style={ styles.overlay } />
     <View style={styles.explorBox}>
     <Button
      buttonStyle={{
       position: 'absolute',
       top: 313,
       right: 0,
       bottom: 18,
       left: 3,
       width: 171,
       height: 63,
       backgroundColor: '#b30000'
      }}
      titleStyle={{ fontWeight: 'bold', padding: 9, fontSize: 21}}
      iconRight="right"
      raised="true"
      icon={
        <Icon name="chevron-forward-outline" size={40} color="white" />
      }
      title= "Explore"
      onPress={() => this.props.navigation.navigate('BottomNav')}
    />
     </View>
     </ImageBackground>
      </View>
    );
  }
}

export default Landing;
