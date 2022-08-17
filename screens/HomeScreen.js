import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native'
import { styles } from '../assets/styles/Style';
import { Button } from 'react-native-elements';
import bottle from '../assets/images/bottle.png';


class HomeScreen extends PureComponent {
  render() {
    return (
      <View style={styles.homeBackground}>
       <View style={styles.wineContainer}>
       <View style={ styles.descriptionContainer}>
       <Text style={ styles.labelText }>Volume, L</Text>
       <Text style={ styles.descriptionText }>0.75</Text>
       <Text style={ styles.labelText }>Alcohol, %</Text>
       <Text style={ styles.descriptionText }>0.35</Text>
       <Text style={ styles.labelText }>Sugar, g/l</Text>
       <Text style={ styles.descriptionText }>1.0</Text>
       </View>
       <View style={ styles.bottleContainer}>
       <Image source={ bottle } />
       </View>
       </View>
       <View style={ styles.pricingContainer }>
        <Text style={[styles.descriptionText,{ marginTop: 9}]}>$599</Text>
       <Button
        buttonStyle={{
         backgroundColor: '#b30000',
         padding: 18
        }}
        titleStyle={{ fontWeight: 'bold', padding: 9, fontSize: 21}}
        raised="true"
        title= "Add to cart"
        onPress={() => this.props.navigation.navigate('BottomNav')}
      />
       </View>
      </View>
    );
  }
}

export default HomeScreen
