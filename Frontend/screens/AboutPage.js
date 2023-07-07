import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const AboutPage = ({ navigation }) => {
  const handleSeeLand = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={require('../assets/Aboutpage.png')} style={styles.backgroundImage}>
     <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
     <View style={styles.flexContainer}>
      <Text style={styles.description}>While the urban ambience blend with calm and tranquillity, full prestigious Prime Lands in Thalawathugoda, Weera Mawatha make sure to fulfill your urban needs with sophisticated lifestyle. Choose your ideal land for building your dream home or investment purposes. These lands fill your life with So much of comfort and always make sure that gazing at the stunning vistas that relax you all the day.</Text>
       
      <TouchableOpacity style={styles.seeLandButton} onPress={handleSeeLand}>
        <Text style={styles.seeLandButtonText}>See Lands</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  flexContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    width: 250,
    height: 200,
    marginTop: 30,
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 30,
    marginBottom: 50,
  },
  seeLandButton: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 15,
  },
  seeLandButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutPage;