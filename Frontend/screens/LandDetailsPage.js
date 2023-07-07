import React, { useState } from 'react'; 
import { View, Text, Button, Image, StyleSheet, ImageBackground } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; 

const LandDetailsPage = () => { 
  const navigation = useNavigation(); 
  const [cartItems, setCartItems] = useState([]); 

  const handleReserve = () => { 
    setCartItems([...cartItems, 
    { name: 'Land 1', 
      image: require('../assets/1.jpg') }]); 
    navigation.navigate('Cart', { cartItems }); 
  }; 

  return ( 
    <ImageBackground source={require('../assets/BG.png')} style={styles.backgroundImage}>
    <View style={styles.container}> 
      <Image source={require('../assets/1.jpg')} style={styles.image} /> 
      <Text style={styles.name}>Land 1</Text> 
      <Text style={styles.description}>Reservation – Rs.500,000.00
      40% down payment within 14 days (Including Reservation)
      If settled within a week of month you will receive a special discount 
      18 months interest free or bank loan facilities or can arrange an easy payment method from Prime Group.
      </Text> 
      <Button title="Reserve" onPress={handleReserve} /> 
    </View> 
    </ImageBackground>
  ); 
}; 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width:"100%",
    height:"100%",
  },
  image: { 
    width: 300, 
    height: 300, 
    marginBottom: 20
  }, 
  name: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10 
  }, 
  description: { 
    marginBottom: 20 
  } 
}); 

export default LandDetailsPage;
