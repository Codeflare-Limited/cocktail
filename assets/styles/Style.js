import { StyleSheet } from 'react-native';
const white = "#FFF";
const pacifico = 'Pacifico';
const primaryColor = '#020418';
const secondaryColor = '#b30000';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   width: '100%',
   justifyContent: "center",
   alignItems: 'center'
 },
 appContainer: {
   flex: 1,
   backgroundColor: primaryColor
 },
 overlay: {
   ...StyleSheet.absoluteFillObject,
   backgroundColor: 'rgba(0, 0, 0, 0.3)',
     },
  homeBackground: {
    flex: 1,
    backgroundColor: primaryColor,
    padding: 9
  },
  wineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionContainer:{
    flexDirection: 'column',
  },
  bottleContainer: {
    padding: -18
  },
  labelText:{
    fontSize: 18,
    color: white
  },
  descriptionText: {
    color: white,
    fontSize: 36,
    marginBottom: 18
  },
  pricingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageBottle: {
    width: 72
  }
})



export { styles, secondaryColor, primaryColor }
