import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity ,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const lands = [
  { id: '1', name: 'Anuradapura', image: require('../assets/land1.jpg') },
  { id: '2', name: 'Malabe', image: require('../assets/2.jpg') },
  { id: '3', name: 'Kurunegala', image: require('../assets/3.jpg') },
];

const HomePage = () => {
  const navigation = useNavigation();

  const handlePress = (land) => {
    if (land === 'Anuradapura') {
      navigation.navigate('LandOne');
    } else if (land === 'Land Two') {
      navigation.navigate('LandTwo');
    } else if (land === 'Land Three') {
      navigation.navigate('LandThree');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.name)}>
      <View style={styles.rectangle}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <Text style={styles.landName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={require('../assets/BG.png')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Property Page</Text>
      <FlatList
        data={lands}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  list: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingVertical: 20
  },
  rectangle: {
    width: '90%',
    aspectRatio: 1.3,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  landName: {
    position: 'absolute',
    top: 8,
    left: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    position: 'absolute',
  },
});

export default HomePage;