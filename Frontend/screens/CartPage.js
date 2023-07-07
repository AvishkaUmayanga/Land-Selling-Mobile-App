import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';

const CartPage = () => {
  const { params } = useRoute();
  const { cartItems, image } = params;

  return (
    <ImageBackground source={require('../assets/BG.png')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Reserved Lands</Text>
      <Text style={styles.lands}>Number of Lands: {cartItems.length}</Text>

     
      {cartItems.map((item, index) => (
        <View key={index} style={styles.cartItem}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>Name: {item.name}</Text>
          </View>
        </View>
      ))}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lands: {
    fontSize: 18,
    marginBottom: 20
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    width: '90%',
    elevation: 5
  },
  details: {
    marginLeft: 20
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222'
  },
  description: {
    fontSize: 16,
    color: '#555'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16
  }
});

export default CartPage;