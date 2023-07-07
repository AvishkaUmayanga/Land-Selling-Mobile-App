import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const LoadingPage = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('About');
  };

  return (
    <ImageBackground source={require('../assets/Loadingscreen.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        <View style={styles.getStartedContainer}>
          <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
            <Text style={styles.getStartedButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  logo: {
    width: 250,
    height: 200,
    marginTop: 30,
  },
  getStartedContainer: {
    marginBottom: 50,
  },
  getStartedButton: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 15,
  },
  getStartedButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoadingPage;
